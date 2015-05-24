/**
 * jsonWebToken
 *
 * @description :: JSON Webtoken Service for sails
 * @help        :: See https://github.com/auth0/node-jsonwebtoken & http://sailsjs.org/#!/documentation/concepts/Services
 */

var jwt = require('jsonwebtoken');

var secretToken = 'Token.Secret';

// Generates a Json Web Token from a supplied payload.
module.exports.sign = function(payload) {

  return jwt.sign(
    payload,
    secretToken, // Token Secret that we sign it with.
    {
      expiresInMinutes : 180 // Token Expire time.
    }
  );

};

// Verifies token on a request.
module.exports.verify = function(token, callback) {

  return jwt.verify(
    // The token to be verified.
    token,
    // Same token we used to sign.
    secretToken,
    // No Option.
    // See https://github.com/auth0/node-jsonwebtoken#jwtverifytoken-secretorpublickey-options-callback
    {},
    // Pass errors or decoded token to callback.
    callback
  );

};
