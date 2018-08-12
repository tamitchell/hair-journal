const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

const Regimen = new Schema({
  regimentitle: String,
  purpose: String,
  moisturizing: String,
  detangling: String,
  washing: String,
  styling: String,
  trimming: String,
  products: String,
  additionalNotes: String,
  author: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },
  createdAt: {
    type: Date,
    default: Date.now()
  }
});




module.exports = {
  Regimen: mongoose.model("Regimen", Regimen),
  // Routine: mongoose.model("Routine", Routine)
};