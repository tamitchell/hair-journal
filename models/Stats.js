const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

const Stats = new Schema({
  hairtype: String,
  hairlength: String,
  hairdensity: String,
  hairporosity: String,
  
  profilename : [
    {
      type: Schema.Types.ObjectId,
      ref: "User"
}]
});

module.exports = mongoose.model("Stats", Stats);
