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

.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'teste', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
})

.controller('CotacoesCtrl', function($scope) {
  $scope.cotacoes = [
    { title: 'iuoi', id: 1 },
    { title: 'Chuoiuoiill', id: 2 },
    { title: 'uiuoio', id: 3 },
    { title: 'Inuiouiudie', id: 4 },
    { title: 'Ruiouoiap', id: 5 },
    { title: 'Couoiuiowbell', id: 6 }
  ];
})

.controller('CotacaoCtrl', function($scope, $stateParams) {
})

.controller('SinitrosCtrl', function($scope) {
  $scope.sinistros = [
    { title: '9u9u9u', id: 1 },
    { title: 'Chiu0u09ull', id: 2 },
    { title: 'u09u09', id: 3 },
    { title: '90u90', id: 4 },
    { title: '0000000000', id: 5 },
    { title: 'Coi09i09i09i9wbell', id: 6 }
  ];
})

.controller('SinitroCtrl', function($scope, $stateParams) {
});