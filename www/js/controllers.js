var URL = 'https://1-dot-apix-carinsurance-cherri-02.appspot.com/_ah/api/carinsuranceendpoint/v1';

angular.module('starter.controllers', [])

        .service('cotacaoService', ['$http', function ($http) {

                var URL_COTACAO = URL + '/cotacoes';

                function findAll() {
                    return $http({method: "GET", url: URL_COTACAO + "/?_limit=10&_offset=0"});
                }

                function findById(id) {
                    return $http({method: "GET", url: URL_COTACAO + "/" + id});
                }

                function create(obj) {
                    return $http({method: "POST", url: URL_COTACAO, data: obj});
                }

                function update(obj) {
                    return $http({method: "PUT", url: URL_COTACAO + "/" + obj.id, data: obj});
                }

                function remove(id) {
                    return $http({method: "DELETE", url: URL_COTACAO + "/" + id});
                }

                this.getCotacao = function (id) {
                    return findById(id);
                };

                this.getCotacoes = function () {
                    return findAll();
                };

                this.deleteCotacao = function (id) {
                    return remove(id);
                };

                this.saveCotacao = function (obj) {
                    if (obj.id)
                        return update(obj);
                    else
                        return create(obj);
                };

            }])

        .service('sinistroService', ['$http', function ($http) {

               //TODO

            }])

        .controller('AppCtrl', function ($scope, $ionicModal, $timeout, $http) {

            // With the new view caching in Ionic, Controllers are only called
            // when they are recreated or on app start, instead of every page change.
            // To listen for when this page is active (for example, to refresh data),
            // listen for the $ionicView.enter event:
            //$scope.$on('$ionicView.enter', function(e) {
            //});

            // Form data for the login modal
            $scope.loginData = {};

            // Create the login modal that we will use later
            $ionicModal.fromTemplateUrl('templates/login.html', {
                scope: $scope
            }).then(function (modal) {
                $scope.loginModal = modal;
            });

            // Triggered in the login modal to close it
            $scope.closeLogin = function () {
                $scope.loginModal.hide();
            };

            // Open the login modal
            $scope.login = function () {
                $scope.loginModal.show();
            };

            // Perform the login action when the user submits the login form
            $scope.doLogin = function () {
                console.log('Doing login', $scope.loginData);

                // Simulate a login delay. Remove this and replace with your login
                // code if using a login system
                $timeout(function () {
                    $scope.closeLogin();
                }, 1000);
            };

        })

        .controller('CotacaoCtrl', function ($scope, $ionicModal, cotacaoService, $stateParams) {

            $ionicModal.fromTemplateUrl('templates/newcotacao.html', {scope: $scope}).then(
                    function (modal) {
                        $scope.loginNewCotacao = modal;
                    });

            $scope.newCotacao = function () {
                $scope.cotacao = {};
                $scope.loginNewCotacao.show();
            };

            $scope.closeNewCotacao = function () {
                $scope.loginNewCotacao.hide();
            };

            $scope.getCotacoes = function () {
                cotacaoService.getCotacoes().then(
                        function (resp) {
                            if (resp.data.items.length)
                                $scope.cotacoes = resp.data.items;
                            else
                                $scope.cotacoes.push({title: 'Nenhum resultado encontrado', id: 0});
                        },
                        function (err) {
                            $scope.cotacoes = [
                                {title: 'Erro ao recuperar informações das cotações', id: 0}
                            ];
                        }
                );
            };

            $scope.getCotacaoById = function () {
                cotacaoService.getCotacao($stateParams.cotacaoId).then(
                        function (resp) {
                            $scope.cotacao = resp.data;
                        },
                        function (err) {
                            console.log('erro');
                        }
                );
            };

            $scope.saveCotacao = function () {
                cotacaoService.saveCotacao($scope.cotacao).then(
                        function (resp) {
                            $scope.cotacao = resp.data;
                        },
                        function (err) {
                            console.log('erro');
                        }
                );
//                 $timeout(function () {
                $scope.closeNewCotacao();
//                 }, 1000);
            };

            $scope.deleteCotacao = function (id) {
                cotacaoService.deleteCotacao(id).then(
                        function (resp) {
                            $scope.getCotacoes();
                        },
                        function (err) {
                            console.log('erro');
                        }
                );
            };

        })

        .controller('SinistroCtrl', function ($scope, $ionicModal, sinistroService, $stateParams) {

            //TODO new sinistro
        });