const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

const Stats = new Schema({
  author: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },
  hairtype: String,
  hairlength: String,
  hairdensity: String,
  hairporosity: String,
});

module.exports = mongoose.model("Stats", Stats);
