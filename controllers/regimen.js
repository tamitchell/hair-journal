const { Regimen, Routine } = require("../models/Regimen");

module.exports = {
  show: (req, res) => {
    Regimen.findOne({ _id: req.params.id })
      .populate("author")
      .exec(function(err, regimen) {
        Routine.populate(regimen.Routine, { path: "author" }, function(
          err,
          routine
        ) {
          regimen.routine = routine;
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
      content: req.body.regimen.content,
      author: req.user._id
    }).then(regimen => {
      req.user.regimen.push(regimen);
      req.user.save(err => {
        res.redirect(`/regimen/${regimen._id}`);
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