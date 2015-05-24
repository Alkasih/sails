/**
* UserController
*
* @description :: Server-side logic for managing Users.
* @help        :: https://github.com/josoroma/sails/issues
*/

module.exports = {

  signup: function (req, res) {

    return 'Signup';

  },

  create: function (req, res) {

    if (req.body.password !== req.body.confirmPassword) {

      return res.json(
        401,
        {
          err: 'Password does not match with Confirm Password.'
        }
      );

    }

    User.create(req.body).exec(function (err, user) {

      if (err) {

        return res.json(
          err.status,
          {
            err: err
          }
        );

      }

      // If a user is created then return user and token as response.
      if (user) {

        // Our payload is: { id: user.id}.
        res.json(
          200,
          {
            user: user,
            token: jsonWebToken.sign(
              {
                id: user.id
              }
            )
          }
        );

      }

    });

  }

};
