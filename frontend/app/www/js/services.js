angular.module('starter.services', [])

.factory('Auth', ['$rootScope', '$state', '$sailsSocket', '$localStorage', 'jwtHelper', function ($rootScope, $state, $sailsSocket, $localStorage, jwtHelper) {

  var setToken = function(data) {

    $localStorage.token = data.token;
    $localStorage.user = data.user;

    $rootScope.isLoggedIn = true;

    console.log('Factory Auth - setToken - $rootScope', $rootScope);

  };

  var tokenClaims = function() {

    var user = {};

    if ($localStorage.user && $localStorage.token) {

      user = jwtHelper.decodeToken($localStorage.token);

    }

    console.log('Factory Auth - tokenClaims - user', user);

    return user;

  };

  return {

    signup: function(credentials, success, err) {
      return $sailsSocket.post('/signup', credentials);
    },

    login: function(credentials, success, err) {
      return $sailsSocket.post('/login', credentials);
    },

    setToken: setToken,

    logout: function() {

      $rootScope.auth.isLoggedIn = false;

      delete $localStorage.user;
      delete $localStorage.token;

      return $state.go('login');

    },

    getTokenClaims: function() {

      return tokenClaims();

    },

    authenticate: function() {

      if ($localStorage.user && $localStorage.token) {
        console.log('Factory Auth - authenticate - Logged in', tokenClaims);
        return true;
      } else {
        console.log('Factory Auth - authenticate - Please Log in', tokenClaims);
        return false;
      }

    }

  }; // return

}])

.run(['Auth', '$rootScope', function(Auth, $rootScope) {

  $rootScope.auth = Auth;

  console.log('Run - $rootScope.auth', $rootScope.auth);

}])

.factory('Data',['$sailsSocket', function($sailsSocket) {

  return {

    getRestrictedData: function(url, success, err)  {
      console.log('getRestrictedData URL', url);
      return $sailsSocket.get(url);
    }

  };

}])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Ben Sparrow',
    lastText: 'You on your way?',
    face: 'https://pbs.twimg.com/profile_images/514549811765211136/9SgAuHeY.png'
  }, {
    id: 1,
    name: 'Max Lynx',
    lastText: 'Hey, it\'s me',
    face: 'https://avatars3.githubusercontent.com/u/11214?v=3&s=460'
  },{
    id: 2,
    name: 'Adam Bradleyson',
    lastText: 'I should buy a boat',
    face: 'https://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa.jpeg'
  }, {
    id: 3,
    name: 'Perry Governor',
    lastText: 'Look at my mukluks!',
    face: 'https://pbs.twimg.com/profile_images/598205061232103424/3j5HUXMY.png'
  }, {
    id: 4,
    name: 'Mike Harrington',
    lastText: 'This is wicked good ice cream.',
    face: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
});
