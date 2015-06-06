/**
* AuthController
*
* @description :: Server-side logic for managing Auths.
* @help        :: See http://links.sailsjs.org/docs/controllers
*/

module.exports = {

  index: function (req, res) {

    var token = null;

    var username = req.param('email');
    var password = req.param('password');

    if (!email || !password) {
      return res.json(401, {
        err: 'Email and password required.'
      });
    }

    User.findOne({email: email}, function (err, user) {

      if (!user) {
        return res.json(401, {
          err: 'Invalid email or password.'
        });
      }

      User.comparePassword(password, user, function (err, valid) {

        if (err) {
          return res.json(403, {
            err: 'Forbidden.'
          });
        }

        token = jsonWebToken.sign({ id: user.id });

        if (valid) {

          res.json(200, {
            user: user,
            token: token
          });

        } else {

          res.json(401, {
            err: 'Invalid email or password.'
          });
          
        }

      });

    });

  }

};
