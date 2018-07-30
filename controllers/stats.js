const { Stats } = require("../models/Stats");

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
        res.render("/new");
      },
      create: (req, res) => {
        Stats.create({
          description: req.body.regimen.description,
          author: req.user._id
        }).then(stat => {
          req.user.stat.push(stat);
          req.user.save(err => {
            res.redirect(`/user/${user._id}`);
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