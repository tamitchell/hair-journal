const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

const HairStats = new Schema({
  hairtype: String,
  hairlength: String,
  hairdensity: String,
  hairporosity: String,
  author: {
    type: Schema.Types.ObjectId,
    ref: "User"
  }
});

module.exports = mongoose.model("HairStats", HairStats);
