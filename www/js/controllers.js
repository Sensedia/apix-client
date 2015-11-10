var URL = 'https://1-dot-apix-carinsurance-cherri-02.appspot.com/_ah/api/carinsuranceendpoint';
var URL_COTACOES = URL+'/v1/cotacoes';
var URL_SINISTROS = URL+'/v1/sinistros';

angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout, $http) {

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
  }).then(function(modal) {
    $scope.loginModal = modal;
  });

  $ionicModal.fromTemplateUrl('templates/newcotacao.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.loginNewCotacao = modal;
  });

  $ionicModal.fromTemplateUrl('templates/newsinistro.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.loginNewSinistro = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.loginModal.hide();
  };

  $scope.closeNewCotacao = function() {
    $scope.loginNewCotacao.hide();
  };

  $scope.closeNewSinistro = function() {
    $scope.loginNewSinistro.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.loginModal.show();
  };

  $scope.newCotacao = function() {
    $scope.loginNewCotacao.show();
  };

  $scope.newSinistro = function() {
    $scope.loginNewSinistro.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };

  $scope.saveSinistro = function() {
      var req = {
        method: 'POST',
        url: URL_SINISTROS,
        //headers: { 'Content-Type': ""},
        data: $scope.sinistro
      }
      $http(req)
           .then(
              function(resp) {                
                $scope.sinistro = resp.data; 
                console.log($scope.sinistro);
                $scope.sinistro  = [];
              }, 
              function(err) {
                console.log('erro');
              }
            )
      
      $timeout(function() {
        $scope.closeNewSinistro();
      }, 1000);
    };

    $scope.saveCotacao = function() {
        var req = {
          method: 'POST',
          url: URL_COTACOES,
          //headers: { 'Content-Type': ""},
          data: $scope.cotacao
        }
        $http(req)
             .then(
                function(resp) {                
                  $scope.cotacao = resp.data; 
                  console.log($scope.cotacao);
                  $scope.cotacao  = [];
                }, 
                function(err) {
                  console.log('erro');
                }
              )
        $timeout(function() {
          $scope.closeNewCotacao();
        }, 1000);
      };
})

.controller('CotacoesCtrl', function($scope, $http) {
    $scope.get = function() {
      var req = {
          method: 'GET',
          url: URL_COTACOES + '?_limit=10&_offset=0'
          //headers: { 'Content-Type': ""},
          //data: { test: '' }
      }
      $http(req)
           .then(
              function(resp) {  
                $scope.cotacoes = [];          
                if(resp.data.items){
                  resp.data.items.forEach(function(item) {
                    $scope.cotacoes.push(item);
                  });
                }else{
                  $scope.cotacoes.push({ title: 'Nenhum resultado encontrado', id: 0 });
                }            
              }, 
              function(err) {
                $scope.cotacoes = [
                  { title: 'Erro ao recuperar informações das cotações', id: 0 }
                ];
              }
            )
    }

    $scope.get();

    $scope.deleteCotacao = function(id) {
      var req = {
        method: 'DELETE',
        url: URL_COTACOES + "/" + id
        //headers: { 'Content-Type': ""}
      }
      $http(req)
           .then(
              function(resp) {
                  console.log('success');
                  $scope.get();
              }, 
              function(err) {
                  console.log('erro');
              }
            )  
      console.log($scope.cotacoes);
    };
})

.controller('CotacaoCtrl', function($scope, $http, $stateParams) {      
      $scope.get = function() {
        var req = {
          method: 'GET',
          url: URL_COTACOES+"/"+$stateParams.cotacaoId
          //headers: { 'Content-Type': ""},
          //data: { test: '' }
        }
        $http(req)
             .then(
                function(resp) {
                  $scope.cotacao = resp.data; 
                }, 
                function(err) {
                  console.log('erro');
                }
              )  
      }
      
      $scope.get();      

      $scope.updateCotacao = function() {
        var req = {
          method: 'PUT',
          url: URL_COTACOES+"/"+$scope.cotacao.id,
          //headers: { 'Content-Type': ""},
          data: $scope.cotacao
        }
        console.log(req.url);
        $http(req)
             .then(
                function(resp) {                
                  $scope.cotacao = resp.data; 
                  console.log($scope.cotacao);
                }, 
                function(err) {
                  console.log('erro');
                }
              )
      };
})

.controller('SinitrosCtrl', function($scope, $http) {    
    $scope.get = function() {
      var req = {
          method: 'GET',
          url: URL_SINISTROS + '?_limit=10&_offset=0'
          //headers: { 'Content-Type': ""},
          //data: { test: '' }
      }
      $http(req)
        .then(
          function(resp) {  
            $scope.sinistros = []; 
            if(resp.data.items){
              resp.data.items.forEach(function(item) {
                $scope.sinistros.push(item);
              });
            }else{
              $scope.sinistros.push({ title: 'Nenhum resultado encontrado', id: 0 });
            }            
          }, 
          function(err) {
            $scope.sinistros = [
              { title: 'Erro ao recuperar informações dos sinistros', id: 0 }
            ];
          }
        )  
    }     
    
    $scope.get();

    $scope.deleteSinistro = function(id) {
      var req = {
        method: 'DELETE',
        url: URL_SINISTROS+"/"+id
        //headers: { 'Content-Type': ""}
      }
      $http(req)
           .then(
              function(resp) {
                console.log('sucess');
              }, 
              function(err) {
                console.log('erro');
              }
            )  
      console.log($scope.sinistros);
    };      
})

.controller('SinitroCtrl', function($scope, $http, $stateParams) {
    var req = {
      method: 'GET',
      url: URL_SINISTROS+"/"+$stateParams.sinistroId
      //headers: { 'Content-Type': ""},
      //data: { test: '' }
    }
    console.log(req.url);
    $http(req)
         .then(
            function(resp) {                
              $scope.sinistro = resp.data; 
              console.log($scope.sinistro);
            }, 
            function(err) {
              console.log('erro');
            }
          )    

    $scope.updateSinistro = function() {
      var req = {
        method: 'PUT',
        url: URL_SINISTROS+"/"+$scope.sinistro.id,
        //headers: { 'Content-Type': ""},
        data: $scope.sinistro
      }
      $http(req)
           .then(
              function(resp) {                
                $scope.sinistro = resp.data; 
                console.log($scope.sinistro);
              }, 
              function(err) {
                console.log('erro');
              }
            )
    };
});