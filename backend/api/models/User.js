/**
* User.js
*
* @description :: User Model
* @docs        :: https://github.com/josoroma/sails/tree/master/backend
*/

// To safely store a user password.
var bcrypt = require('bcrypt');

module.exports = {

  schema: true,

  attributes: {

    email: {
      type: 'email',
      required: 'true',
      unique: true
    },

    encryptedPassword: {
      type: 'string'
    },

    // Discard encrypted password from response.
    toJSON: function () {
      var obj = this.toObject();
      delete obj.encryptedPassword;
      return obj;
    }

  },

  // Encrypt password before creating a User.
  beforeCreate : function (values, next) {

    bcrypt.genSalt(10, function (err, salt) {

      if (err) { return next(err); }

      bcrypt.hash(values.password, salt, function (err, hash) {

        if (err) { return next(err); }

        values.encryptedPassword = hash;

        next();

      });

    });

  },

  comparePassword : function (password, user, cb) {

    bcrypt.compare(password, user.encryptedPassword, function (err, match) {

      if (err) { cb(err); }

      if (match) {

        cb(null, true);

      } else {

        cb(err);
        
      }

    });

  }

};
