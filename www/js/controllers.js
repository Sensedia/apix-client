angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

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

  $scope.saveCotacao = function() {
    console.log('Doing cotacao', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };

  $scope.saveSinistro = function() {
    console.log('Doing sinistro', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('CotacoesCtrl', function($scope, $http) {
  var req = {
      method: 'GET',
      url: 'https://cors-test.appspot.com/test'
      //headers: { 'Content-Type': ""},
      //data: { test: 'test' }
  }
  $http(req)
       .then( 
          function(resp) {
            $scope.cotacoes = [
              { title: 'Renan da Zueira', id: 1 },
              { title: 'Chuoiuoiill', id: 2 },
              { title: 'uiuoio', id: 3 },
              { title: 'Inuiouiudie', id: 4 },
              { title: 'Ruiouoiap', id: 5 },
              { title: 'Couoiuiowbell', id: 6 }
            ];
          }, 
          function(err) {
            $scope.cotacoes = [
              { title: 'Errou', id: 1 },
              { title: 'teste', id: 2 }
            ];
          }
        )  
})

.controller('CotacaoCtrl', function($scope, $stateParams) {
})

.controller('SinitrosCtrl', function($scope, $http) {
  $http.get('https://cors-test.appspot.com/test')
       .then(
          function(resp) {
            $scope.sinistros = [
              { title: 'Marcão da Zueira', id: 1 },
              { title: 'Chuoiuoiill', id: 2 },
              { title: 'uiuoio', id: 3 },
              { title: 'Inuiouiudie', id: 4 },
              { title: 'Ruiouoiap', id: 5 },
              { title: 'Couoiuiowbell', id: 6 }
            ];
          }, 
          function(err) {
            $scope.sinistros = [
              { title: 'Errou', id: 1 },
              { title: 'teste', id: 2 }
            ];
          }
        )  
})

.controller('SinitroCtrl', function($scope, $stateParams) {
});