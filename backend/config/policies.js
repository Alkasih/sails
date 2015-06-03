/**
* Policy Mappings
* (sails.config.policies)
*
* Policies are simple functions which run **before** your controllers.
* You can apply one or more policies to a given controller, or protect
* its actions individually.
*/

module.exports.policies = {

  // Everything is resctricted.
  '*': ['isAuthorized'],

  'UserController': {
    'login': true,
    'signup': true
  },

  'AuthController': {
    '*': true // Allowing public access.
  }

};
