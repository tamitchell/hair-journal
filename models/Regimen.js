const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

const Routine = new Schema({
  Name: String,
  author: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },
  description: String,
  moisturizing: String,
  detangling: String,
  washing: String,
  // styling: String,
  trimming: String,
  // products: String,
  additionalNotes: String,

  modifiedAt: {
    type: Date,
    default: Date.now(),
  }
});

const Regimen = new Schema({
  author: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },
  routines: [ Routine ],
  createdAt: {
    type: Date,
    default: Date.now()
  }
});




module.exports = {
  Regimen: mongoose.model("Regimen", Regimen),
  Routine: mongoose.model("Routine", Routine)
};