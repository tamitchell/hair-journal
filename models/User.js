const mongoose = require("../db/connection");
const bcrypt   = require('bcrypt-nodejs');

const Schema = mongoose.Schema;

const User = new Schema({

    local: { 
      username: String,
      password: String, 
    },

    hairstats: 
      [{
        type: Schema.Types.ObjectId,
        ref: "HairStats"
      }]
    ,

    regimens: [
      {
        type: Schema.Types.ObjectId,
        ref: "Regimen"
      }
    ]
  });

  User.methods.encrypt = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
  };

  User.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.local.password);
  };
  
  module.exports = mongoose.model("User", User);
  