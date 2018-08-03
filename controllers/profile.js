const User = require("../models/User");
const {
  Regimen,
  Routine
} = require("../models/Regimen")
const Stats = require("../models/Stats")
const passport = require("passport");


module.exports = {
  showProfile: (req, res) => {
    User.findOne({
        _id: req.params.id
      })
      .populate({
        path: "regimen",
        options: {
          limit: 5,
          sort: {
            createdAt: -1
          }
        }
      })
      .then(user => {
        res.render("user/profile/show", {
          user
        });
      });
  },

  //REGIMEN CONTROLLER

  showRegimen: (req, res) => {
    User.findOne({
        _id: req.params.id
      })
      .populate("regimen")
      .exec(function (err, regimen) {
        Regimen.populate(regimen, {
          path: "author"
        }, function (
          err,
          regimen
        ) {
          console.log(regimen);
          res.render("user/profile/regimen/show", regimen);
        });
      });
  },
  newRegimen: (req, res) => {
    res.render("user/profile/regimen/new");

  },
  createRegimen: (req, res) => {
    Regimen.create({
      author: req.user._id,
      title: req.body.title,
      purpose: req.body.purpose
    }).then(regimen => {
      console.log(regimen)
      User.findOne({
        _id: user._id
      }).then(user => {
        user.regimens.push(regimen);
        console.log(regimen)
        user.save(err => {
          res.redirect(`/profile/${regimen._id}`);
        })
      })

    })
  },
  updateRegimen: (req, res) => {
    let {
      content
    } = req.body;
    Regimen.findOneandUpdate({
      _id: req.params.id
    }).then(regimen => {
      regimen.push({
        content,
        author: req.user._id
      });
      regimen.save(err => {
        res.redirect(`/regimen/${regimen._id}`);
      });
    });
  },

  //Routine Controller

  showRoutine: (req, res) => {
    Regimen.findOne({
        _id: req.params.id
      })
      .populate("regimen")
      .exec(function (err, regimen) {
        Regimen.populate(regimen, {
          path: "author"
        }, function (
          err,
          regimen
        ) {
          console.log(regimen);
          res.render("user/profile/regimen/show", regimen);
        });
      });
  },
  newRoutine: (req, res) => {
    res.render("user/profile/regimen/new");

  },
  createRoutine: (req, res) => {
    Routine.create({
      author: req.user._id,
      Name: req.body.regimenname,
      description: req.body.txtDesc,
      moisturizing: req.body.moisturizing,
      detangling: req.body.detangling,
      washing: req.body.washing,
      styling: req.body.styling,
      trimming: req.body.trimming,
      products: req.body.products,
      additionalNotes: req.body.addNotes,
    }).then(routine => {
      Regimen.findOne({
        _id: req.body.author
      }).then(regimen => {
        regimen.routines.push(routine);
        console.log(routine)
        regimen.save(err => {
          res.redirect(`/user/profile/${user.regimens}`);
        })
      })

    })
  },
  updateRoutine: (req, res) => {
    let {
      content
    } = req.body;
    Routine.findOneandUpdate({
      _id: req.params.id
    }).then(routine => {
      routine.push({
        content,
        author: req.user._id
      });
      regimen.save(err => {
        res.redirect(`/regimen/${regimen.routine}`);
      });
    });
  },

  //STATS Controller

  // showStats: (req, res) => {
  //   Stats.findOne({ _id: req.params.id })
  //   .populate({
  //       path: "stats/show"
  //             })
  //     .then(user => {
  //       res.render("stats/show", { user });
  //     });
  // },
  // newStat: (req, res) => {
  //   res.render("user/profile/stats/new");
  // },
  // createStats: (req, res) => {
  //   Stats.create({
  //     author: req.user._id,
  //     hairtype: req.body.hairtype,
  //     hairlength: req.body.hairlength,
  //     hairdensity: req.body.hairdensity,
  //     hairporosity: req.body.hairporosity,
  //   }).then(stat => {
  //     user.stats.push(stat);
  //     user.save(err => {
  //       res.redirect(`/user/profile/${user._id}`);
  //     });
  //   });
  // },
  // updateStat: (req, res) => {
  //   let { content } = req.body;
  //   Stats.findOne({ _id: req.params.id }).then(stats => {
  //     stat.push({
  //       content,
  //       author: req.user._id
  //     });
  //     stats.save(err => {
  //       res.redirect(`/user/${user._id}`);
  //     });
  //   });
  // },


  requireAuth: function (req, res, next) {
    if (req.isAuthenticated()) {
      next();
    } else {
      res.redirect("/");
    }
  }
};