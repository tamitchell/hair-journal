const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

const Regimen = new Schema({
  RegimenName: String,
  author: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },
  purpose: String,
  createdAt: {
    type: Date,
    default: Date.now()
  },

  DayReg: {
    type: Schema.Types.ObjectId,
    ref: "DayReg"
  },

  NightReg: {
    type: Schema.Types.ObjectId,
    ref: "NightReg"
  },
 
  comments: [Comment]
});

const DayReg = new Schema({
  purpose:String,
  content:String
})

const NightReg = new Schema({
    purpose: String,
    content:String
})

const Comment = new Schema({
  content: String,
  createdAt: {
    type: Date,
    default: Date.now()
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: "User"
  }
});

module.exports = {
  DayReg: mongoose.model("DayReg", DayReg),
  NightReg: mongoose.model("NightReg", NightReg),
  Regimen: mongoose.model("Regimen", Regimen),
  Comment: mongoose.model("Comment", Comment)
};
