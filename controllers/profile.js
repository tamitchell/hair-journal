const User  = require("../models/User");
const { Regimen, Routine } = require("../models/Regimen")
const HairStats = require('../models/HairStats')
const passport = require("passport");

 module.exports = {
  showProfile: (req, res) => {
    User.findOne({ _id: req.params.id })
      .populate({
        path: "regimen",
        options: { limit: 5, sort: { createdAt: -1 } }
      })
      .then(user => {
        res.render("profile/show", { user } );
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
      author: req.params.id
    }).then(regimenInstance => {
      console.log(regimenInstance)
      User.findOne({ _id: req.params.id }).then(user => {
        console.log(user)
        user.regimens.push(regimenInstance);
        user.save(err => {
          res.redirect(`/profile/${regimens.regimenInstance._id}`);
        });
      });
    });
  },
  updateRegimen: (req, res) => {
    let { content } = req.body;
    Regimen.findByIdAndUpdate({ _id: req.params.id }).then(regimen => {
      regimen.push({
        content,
        author: req.body.author
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
        path: "stats/show",
        options: { limit: 1, sort: { createdAt: -1 } }
              })
      .then(user => {
        res.render("stats/show", { user });
      });
  },
  newStat: (req, res) => {
    res.render("stats/new");
  },
  createStat: (req, res) => {
    HairStats.create({
      hairtype: req.body.hairtype,
      hairlength: req.body.hairlength,
      hairdensity: req.body.hairdensity,
      hairporosity: req.body.hairporosity,  
      author: req.body.author
    }).then(stat => {
      console.log(stat)
      User.findOne({ _id: req.body.author }).then(user => {
        console.log(user)
        user.hairstats.push(stat);
        console.log(user)
        user.save(err => {
          res.render('profile/show', {stat} );
        });
      })
    });
  },
  updateStat: (req, res) => {
    let { content } = req.body;
    Stats.findOne({ _id: req.params.id }).then(stat => {
      stat.push({
        content,
        author: req.user._id
      });
      user.save(err => {
        res.redirect(`/profile/${user._id}`);
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