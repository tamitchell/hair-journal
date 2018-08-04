const User        = require("../models/User")
const { Regimen, Routine } = require("../models/Regimen");
const passport = require("passport");


module.exports = {
  show: (req, res) => {
    Regimen.findOne({ _id: req.params.id })
      .populate("author")
      .exec(function(err, regimen) {
        Regimen.populate(regimen, { path: "author" }, function(
          err,
          regimen
        ) {
          console.log(regimen);
          res.render("regimen/show", regimen);
        });
      });
  },
  new: (req, res) => {
    res.render("regimen/new");
    
  },
  create: (req, res) => {
    Regimen.create({
      regimentitle: req.body.regimen.regimentitle,
      purpose: req.body.regimen.purpose,
      author: req.body.currentUser.id
    }).then(regimenInstance => {
      User.findOne({ _id: currentUser.id }).then(user => {
        user.regimens.push(regimenInstance);
        user.save(err => {
          res.redirect(`/regimen/${regimen._id}`);
        });
      });
    });
  },
  update: (req, res) => {
    let { content } = req.body;
    Regimen.findOne({ _id: req.params.id }).then(regimen => {
      regimen.push({
        content,
        author: req.user._id
      });
      regimen.save(err => {
        res.redirect(`/regimen/${regimen._id}`);
      });
    });
  },
  requireAuth: function(req, res, next) {
    if (req.isAuthenticated()) {
      next();
    } else {
      res.redirect("/");
    }
  }
};