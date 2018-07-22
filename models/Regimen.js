const mongoose = require("../db/connection");
const Schema = mongoose.Schema;


const Routine = new Schema({
  // content: String,
  // createdAt: {
  //   type: Date,
  //   default: Date.now()
  // },
  // author: {
  //   type: Schema.Types.ObjectId,
  //   ref: "User"
  // }
  washing: String,
  styling: String,
  moisturizing: String,
  detangling: String,
  trimming: String,
  products: String,
  additionalNotes: String
  
});

const Regimen = new Schema({
  RegimenName: String,
  author: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },
  description: String,
 
  routine: [Routine],

  createdAt: {
    type: Date,
    default: Date.now()
  },
});

// const DayReg = new Schema({
//   purpose:String,
//   content:String
// })

// const NightReg = new Schema({
//     purpose: String,
//     content:String
// })

module.exports = {
  Regimen: mongoose.model("Regimen", Regimen),
  Routine: mongoose.model("Routine", Routine)
};
