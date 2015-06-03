/**
 * JWT Configuration
 * (sails.config.jwt)
 *
 * For more information on the JsonWebToken, check out:
 * https://github.com/auth0/node-jsonwebtoken
 */

module.exports.jwt = {

  // var cert = fs.readFileSync('private.key');
  secretOrPrivateKey: 'secret.Or.Private.Key',

  options:
  {
    // algorithm: 'RS256',
    // 6 hours = Token Expire time.
    expiresInMinutes : 360
  }

};
