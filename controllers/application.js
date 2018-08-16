const { Regimen } = require("../models/Regimen");

module.exports = {
  index: (req, res) => {
    Regimen.find({})
      .sort({ createdAt: -1 })
      .populate("author")
      .then(regimen => {
        res.render("app/index", { regimen });
      });
  }
};