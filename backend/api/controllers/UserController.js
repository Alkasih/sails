/**
* UserController
*
* @description :: Server-side logic for managing Users.
* @help        :: https://github.com/josoroma/sails/issues
*/

module.exports = {

  login: function (req, res) {

    // console.log(req.body);

    var token = null;

    // Validate request paramaters
    if (!req.body.email || !req.body.password) {
      return res.json( 400, {
        err: 'Please provide a value for all of the required fields.'
      });
    }

    User.findOneByEmail( req.body.email, function(err, user) {

      if (err) {
        return res.json( 500, {
          err: 'Something went wrong with user fetch. Please try again later.'
        });
      }

      if (!user) {
        return res.json( 401, {
          err: 'No account found with that user credentials.'
        });
      }

      // A value of true if user provides the right password account.
      user.isPasswordValid( req.body.password, function (err, valid) {

        if (err) {
          return res.json( 500, {
            err: 'Something went wrong with password validation. Please try again later.'
          });
        }

        if (valid) {

          token = jsonWebToken.sign({ id: user.id });

          // Our payload is: { id: user.id}.
          return res.json( 200, {
            user: user,
            token: token,
            message: 'Now you have logged in!'
          });

        } else {

          return res.json( 401, {
            err: 'Invalid Password. Please try again.'
          });

        }

      });

    });

  },

  signup: function (req, res) {

    console.log(req.body);

    var token = null;

    // Validate request paramaters
    if (!req.body.username || !req.body.email || !req.body.password || !req.body.confirmPassword) {

      return res.json(400, {
        err: 'Please provide a value for all of the required fields.'
      });

    }

    if (req.body.password !== req.body.confirmPassword) {

      return res.json(400, {
        err: 'Password does not match the Confirm Password.'
      });

    }

    User.create(req.body).exec(function (err, user) {

      if (err) {

        return res.json(500, {
          err: 'Something went wrong with user creation. Please try again later.'
        });

      }

      // If a user is created then return user and token as response.
      if (user) {

        token = jsonWebToken.sign({ id: user.id });

        // Our payload is: { id: user.id}.
        return res.json( 200, {
          user: user,
          token: token,
          message: 'All Goes Right. Please login to continue.'
        });

      }

    });

  },

  profile: function (req, res) {

    return res.json( 200, {
      message: 'Happy Hacking!'
    });

  }

};
