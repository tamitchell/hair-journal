const { Regimen } = require("../models/Regimen");

module.exports = {
  index: (req, res) => {
    Regimen.find({})
      .sort({ createdAt: -1 })
      .limit(10)
      .populate("author")
      .then(regimen => {
        res.render("app/index", { regimen });
      });
  }
};