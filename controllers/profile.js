const User  = require("../models/User");
const { Regimen, Routine } = require("../models/Regimen")
const HairStats = require('../models/HairStats')
const passport = require("passport");

 module.exports = {
  showProfile: (req, res) => {
    User.findOne({ _id: req.params.id })
      .populate({
        path: "hairstats",
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
          res.redirect(`/profile/${user._id}`);
        });
      });
    });
  },
  updateRegimen: (req, res) => {
    Regimen.findOneAndUpdate({author: req.params.id}, {$set : {
      regimentitle: req.body.regimentitle,
      purpose: req.body.purpose}}, {new:true}).then(regimenInstance => {
        User.findOne({_id: req.params.id}).then(user => {
          console.log("Here's the updated regimen" + regimenInstance)
          console.log(user)
          res.redirect(`/profile/${user._id}`)
        })
    })
  },
   //STATS Controller
   //TODO: determine where the User.findOne Query is actually getting the right user
   //TODO: understand how populate works, why isn't hairstats populating
   //TODO: determine whether or not .exec is necessary, or if I can just render what has been populated
   //TODO: Why isn't console.log working
   showStats: (req, res) => {
    User
    .findOne({ _id: req.params.id })
    .populate('hairstats')
    .exec(function (err, stat) {
      err
      console.log(stat);
      res.render("profile/show", stat);
      console.log(stat)    
    })
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
      User.findOne({ _id: req.body.author }).then(user => {
        console.log(stat)
        user.hairstats.push(stat);
        user.save(err => {
          res.redirect(`/profile/${user._id}`);
          console.log(user)
        });
      })
    });
  },
  editStat: (req,res) => {
    User.findOne({_id: req.params.id}).then(user => {
      res.render("stats/edit")
    })
   },
  updateStat: (req, res) => {
      HairStats.findOneAndUpdate({author: req.params.id}, {$set : {
        hairtype: req.body.hairtype,
        hairlength: req.body.hairlength,
        hairdensity: req.body.hairdensity,
        hairporosity: req.body.hairporosity}}, {new:true}).then(stat => {
          User.findOne({_id: req.params.id}).then(user => {
            console.log("Here's the updated stat" + stat)
            console.log(user)
            res.redirect(`/profile/${user._id}`)
          })
      })

    // HairStats.findOneAndUpdate({author: req.params.id}, {$set : {
    //   hairtype: req.body.hairtype,
    //   hairlength: req.body.hairlength,
    //   hairdensity: req.body.hairdensity,
    //   hairporosity: req.body.hairporosity}}, {new:true}).then(stat => {
    //   console.log("Here's the updated stat" + stat)
    //   res.redirect(`/profile/${user._id}`)
    // })
  },
   requireAuth: function(req, res, next) {
    if (req.isAuthenticated()) {
      next();
    } else {
      res.redirect("/");
    }
  }
};