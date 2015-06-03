/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes map URLs to views and controllers.
 */

module.exports.routes = {

  '/': { view: 'homepage' },

  'post /login': 'UserController.login',
  'post /signup': 'UserController.signup'

};
