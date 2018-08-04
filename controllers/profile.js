const User  = require("../models/User");
const { Regimen } = require("../models/Regimen")
const passport = require("passport");
 module.exports = {
  showProfile: (req, res) => {
    User.findOne({ _id: req.params.id })
      .populate({
        path: "regimen",
        options: { limit: 5, sort: { createdAt: -1 } }
      })
      .then(user => {
        res.render("user/profile/show", { user } );
      });
  },
 
  //REGIMEN CONTROLLER
  showRegimen: (req, res) => {
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
  newRegimen: (req, res) => {
    res.render("regimen/new");
    
  },
  createRegimen: (req, res) => {
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
  updateRegimen: (req, res) => {
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
   //STATS Controller
   showStats: (req, res) => {
    Stats.findOne({ _id: req.params.id })
    .populate({
        path: "stats/show"
              })
      .then(user => {
        res.render("stats/show", { user });
      });
  },
  newStat: (req, res) => {
    res.render("stats/new");
  },
  createStat: (req, res) => {
    Stats.create({
      author: req.user._id
    }).then(stat => {
      req.user.stat.push(stat);
      console.log(stat)
      req.user.save(err => {
        res.redirect(`/user/profile/${stats._id}`);
      });
    });
  },
  updateStat: (req, res) => {
    let { content } = req.body;
    Stats.findOne({ _id: req.params.id }).then(stats => {
      stat.push({
        content,
        author: req.user._id
      });
      regimen.save(err => {
        res.redirect(`/user/${user._id}`);
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