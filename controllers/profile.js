const User  = require("../models/User");
const { Regimen } = require("../models/Regimen")
const HairStats = require('../models/HairStats')
const passport = require("passport");

 module.exports = {
  showProfile: (req, res) => {
    User.findOne({ _id: req.params.id })
      .populate("hairstats")
      .populate("regimens")
      .then(user => {
        res.render("profile/show", { user } );
      });
  },
  //REGIMEN CONTROLLER
  showRegimen: (req, res) => {
    User
    .findById(req.params.id )
    .populate('regimens')
    .then((regimenInstance) => {
      console.log(regimenInstance)
      res.render("profile/show", regimen);

    })
  },
  newRegimen: (req, res) => {
    res.render("regimen/new");
    
  },
  createRegimen: (req, res) => {
    Regimen.create({
      regimentitle: req.body.regimentitle,
      purpose: req.body.purpose,
      moisturizing: req.body.moisturizing,
      detangling: req.body.detangling,
      washing: req.body.washing,
      styling: req.body.styling,
      trimming: req.body.trimming,
      products: req.body.products,
      additionalNotes: req.body.addNotes,
      author: req.body.author
    }).then(regimenInstance => {
      console.log(regimenInstance)
      User.findOne({ _id: req.body.author }).then(user => {
        user.regimens.push(regimenInstance);
        user.save(err => {
          res.redirect(`/profile/${user._id}`);
        });
      });
    });
  },
  editRegimen: (req,res) => {
    User.findOne({_id: req.params.id}).then(user => {
      res.render("stats/edit")
    })
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
  //STAT CONTROLLER
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
  },
   requireAuth: function(req, res, next) {
    if (req.isAuthenticated()) {
      next();
    } else {
      res.redirect("/");
    }
  }
};