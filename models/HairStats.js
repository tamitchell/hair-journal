const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

const HairStats = new Schema({
  hairtype: String,
  hairlength: String,
  hairdensity: String,
  hairporosity: String,
});

module.exports = mongoose.model("HairStats", HairStats);
