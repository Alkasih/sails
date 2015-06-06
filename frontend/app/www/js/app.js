// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', [
  'ionic',

  'sails.io',     // bower install angularSails
  'ngStorage',    // bower install ngstorage
  'angular-jwt',  // bower install angular-jwt

  'starter.controllers',
  'starter.services'
])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleLightContent();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider, $sailsSocketProvider, jwtInterceptorProvider) {

  var authenticate = ['$q', '$state', '$timeout', 'Auth', function($q, $state, $timeout, Auth) {

    if (Auth.authenticate()) {
      console.log('App - config - Authenticated');
      return $q.when();
    } else {

      console.log('App - config - Not Authenticated');

      $timeout(function() {
        console.log('App - config - Redirect to Login');
        $state.go('login');
      });

      return $q.reject();

    }

  }];

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
  .state('tab', {
    url: "/tab",
    abstract: true,
    templateUrl: "templates/tabs.html"
  })

  // Each tab has its own nav history stack:

  .state('signup', {
    url: '/signup',
    templateUrl: 'templates/signup.html',
    controller: 'LoginCtrl',
    resolve: {
      userStatus: ['$state', '$q', 'Auth', '$timeout', function($state, $q, Auth, $timeout) {
        if (!Auth.authenticate()) {
          console.log('App - config - state - signup - Not Authenticated');
          return $q.when();
        } else {

          console.log('App - config - state - signup - Authenticated');

          $timeout(function() {
            console.log('App - config - state - signup - Redirect to Account');
            $state.go('tab.account');
          });

          return $q.reject();

        }
      }]
    }
  })

  .state('login', {
    url: '/login',
    templateUrl: 'templates/login.html',
    controller: 'LoginCtrl',
    resolve: {

      userStatus: ['$state', '$q', 'Auth', '$timeout', function($state, $q, Auth, $timeout) {

        if (!Auth.authenticate()) {
          console.log('App - config - state - login - Not Authenticated');
          return $q.when();
        } else {

          console.log('App - config - state - login - Authenticated');

          $timeout(function() {
            console.log('App - config - state - login - Redirect to Account');
            $state.go('tab.account');
          });

          return $q.reject();

        }

      }]

    }

  })

  .state('profile', {
    cache: false,
    url: '/profile',
    templateUrl: 'templates/profile.html',
    controller: 'ProfileCtrl'
  })

  .state('tab.dash', {
    url: '/dash',
    views: {
      'tab-dash': {
        templateUrl: 'templates/tab-dash.html',
        controller: 'DashCtrl'
      }
    }
  })

  .state('tab.chats', {
    url: '/chats',
    views: {
      'tab-chats': {
        templateUrl: 'templates/tab-chats.html',
        controller: 'ChatsCtrl'
      }
    }
  })

  .state('tab.chat-detail', {
    url: '/chats/:chatId',
    views: {
      'tab-chats': {
        templateUrl: 'templates/chat-detail.html',
        controller: 'ChatDetailCtrl'
      }
    }
  })

  .state('tab.account', {
    url: '/account',
    views: {
      'tab-account': {
        templateUrl: 'templates/tab-account.html',
        controller: 'AccountCtrl'
      }
    }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/dash');

  jwtInterceptorProvider.tokenGetter = ['$localStorage', function($localStorage) {
    return $localStorage.token;
  }];

  $sailsSocketProvider.interceptors.push('jwtInterceptor');

})

.run(['$rootScope', '$state', 'Auth', function($rootScope, $state, Auth) {

  $rootScope.$on('$stateChangeStart', function(event, toState, toStateParams) {

    console.log('App - run - $stateChangeStart - getTokenClaims()', Auth.getTokenClaims());

    if (Auth.authenticate()) {
      $rootScope.isLoggedIn = true;
    } else {
      $rootScope.isLoggedIn = false;
    }

    console.log('App - run - $stateChangeStart - $rootScope.isLoggedIn', $rootScope.isLoggedIn);

    if (!Auth.authenticate() && !toState.name.match(/^login/) && !toState.name.match(/^signup/)) {
      console.log('App - run - $stateChangeStart - $state.go(login)', toState);
      //return $state.go('login');
    }

  });

}]);
