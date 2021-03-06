const User = require("../models/User");
const { Regimen, Routine } = require("../models/Regimen");
const passport = require("passport");

module.exports = {
  index: (req, res) => {
    Regimen.find({})
      .sort({ createdAt: -1 })
      .limit(10)
      .populate("author")
      .then(regimen => {
        res.render("app/index", { regimen });
      });
  },
  login: (req, res) => {
    res.render("user/login", { 
      message: req.flash("loginMessage") 
    });
  },
  createLogin: (req, res) => {
    const login = passport.authenticate("local-login", {
      successRedirect: "/",
      failureRedirect: "../user/login",  message: req.flash("loginMessage") ,
      failureFlash: true
    });

    return login(req, res);
  },
  signUp: (req, res) => {
    res.render("user/signup", { 
      message: req.flash("signupMessage") 
    });
  },
  createSignUp: (req, res) => {
    const signup = passport.authenticate("local-signup", {
      successRedirect: "/profile/:id/stats/new",
      failureRedirect: "/user/sign-up",
      failureFlash: true
    });

    return signup(req, res);
  },
  logout: (req, res) => {
    req.logout();
    res.redirect("/");
  }
};
