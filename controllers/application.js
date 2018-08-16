const { Regimen } = require("../models/Regimen");

module.exports = {
  index: (req, res) => {
    Regimen.find({})
      .sort({ createdAt: -1 })
      .populate("createdAt")
      .populate("regimentitle")
      .populate("purpose")
      .then(regimen => {
        res.render("app/index", { regimen });
      });
  }
};