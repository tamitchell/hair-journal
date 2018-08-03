const mongoose = require("../db/connection");
const Schema = mongoose.Schema

const Routine = new Schema({
  author: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },
  routinename: String,
  description: String,
  moisturizing: String,
  detangling: String,
  washing: String,
  styling: String,
  trimming: String,
  products: String,
  additionalNotes: String,

  modifiedAt: {
    type: Date,
    default: Date.now(),
  }
});

const Regimen = new Schema({
  title: String,
  purpose: String,
  author: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },
  createdAt: {
    type: Date,
    default: Date.now()
  },
  routines: [Routine],
})

module.exports = {
  Regimen: mongoose.model("Regimen", Regimen),
  Routine: mongoose.model("Routine", Routine)
};