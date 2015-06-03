/**
 * jsonWebToken
 *
 * @description :: JSON Webtoken Service for sails
 * @help        :: See https://github.com/auth0/node-jsonwebtoken
 */

var jwt = require('jsonwebtoken');

// Generates a Json Web Token from a supplied payload.
module.exports.sign = function(payload) {

  return jwt.sign(
    payload,
    process.env.secretOrPrivateKey || sails.config.jwt.secretOrPrivateKey,
    sails.config.jwt.options
  );

};

// Verifies token on a request.
module.exports.verify = function(token, callback) {

  return jwt.verify(
    token,
    process.env.secretOrPrivateKey || sails.config.jwt.secretOrPrivateKey,
    {},
    callback
  );

};
