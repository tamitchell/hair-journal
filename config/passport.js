const LocalStrategy = require("passport-local").Strategy;
const User = require("../models/User");

module.exports = function(passport) {

  passport.serializeUser(function(user, callback) {
    callback(null, user.id);
  });

  passport.deserializeUser(function(id, callback) {
    User.findById(id, function(err, user) {
      callback(err, user);
    });
  });

  passport.use(
    "local-signup",
    new LocalStrategy(
      {
        usernameField: "username",
        passwordField: "password",
        passReqToCallback: true

      },
      function(req, username, password, callback) {
        User.findOne({"local.username": username})
          .then(user => {

             if (user){
              return callback(
                null,
                false,
                req.flash("signupMessage", "That username is already taken. Try another one?")
              );
            } else {
              let newUser = new User();
              newUser.local.username = username
              newUser.local.password = newUser.encrypt(password);

              newUser.save(err => {
                if (err) throw err;
                return callback(null, newUser);
              });
            }
          })
          .catch(err => console.log(err));
      }
    )
  );

  passport.use(
    "local-login",
    new LocalStrategy(
      {
        usernameField: "username",
        passwordField: "password",
        passReqToCallback: true
      },
      function(req, username, password, callback) {
        User.findOne({ "local.username": username }, function(err, user) {
          if (err) return callback(err);

          if (!user) {
            return callback(
              null,
              false,
              req.flash("loginMessage", "Wrong username Try again.")
            );
          }
          if (!user.validPassword(password)) {
            return callback(
              null,
              false,
              req.flash("loginMessage", "Ooops! Wrong password, try again.")
            );
          }
          return callback(null, user);
        });
      }
    )
  );
};
