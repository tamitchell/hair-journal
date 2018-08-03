const { Stats } = require("../models/Stats");
const passport = require("passport");



module.exports = {
    show: (req, res) => {
        Stats.findOne({ _id: req.params.id })
        .populate({
            path: "stats/show"
                  })
          .then(user => {
            res.render("stats/show", { user });
          });
      },
      new: (req, res) => {
        res.render("user/profile/stats/new");
      },
      createStats: (req, res) => {
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
      update: (req, res) => {
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
      }
}