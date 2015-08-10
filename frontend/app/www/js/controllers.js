angular.module('starter.controllers', [])

.controller('LoginCtrl', ['$scope', '$rootScope', '$sailsSocket', '$location', '$localStorage', 'Auth', '$state', function($scope, $rootScope, $sailsSocket, $location, $localStorage, Auth, $state) {

  $scope.validationError = null;

  $rootScope.auth = Auth;
  $scope.user = {};

  $scope.login = function() {

    $sailsSocket.subscribe('user_logged_in',function(msg){
      console.log('user_logged_in', msg);
    });

    var formCredentials = {
      email: $scope.user.email,
      password: $scope.user.password
    };

    Auth.login(formCredentials)
      .success(function(res) {

        Auth.setToken(res);

        $state.go('tab.chats');

      })
      .error(function(err) {
        $scope.validationError = err;
      });

    $scope.user.password = '';

    console.log('LoginCtrl - login - $scope', $scope);

  };

  $scope.signup = function() {

    var formCredentials = {
      username: $scope.user.username,
      email: $scope.user.email,
      password: $scope.user.password,
      confirmPassword: $scope.user.confirmPassword
    };

    Auth.signup(formCredentials)
      .success(function(res) {

        Auth.setToken(res);

        $state.go('tab.account');

      })
      .error(function(err) {
        $scope.validationError = err;
      });

    $scope.user.password = '';
    $scope.user.confirmPassword = '';

    console.log('LoginCtrl - signup - $scope', $scope);

  };

  // $scope.logout = Auth.logout;
  // $scope.token = $localStorage.token;
  // $scope.tokenClaims = Auth.getTokenClaims();

}])

.controller('ProfileCtrl', ['$rootScope', '$scope', 'Data', function($rootScope, $scope, Data) {

  $scope.validationError = null;

  Data.getRestrictedData('/profile')
    .success(function(res) {

      console.log('Profile Success', res);

      $scope.profile = res;

    })
    .error(function(err) {

      console.log('Profile Error', err);

      $scope.validationError = err;

    });

}])

.controller('DashCtrl', function($scope) {})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
