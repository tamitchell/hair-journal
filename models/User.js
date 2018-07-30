//Understanding Growthsphere Models

//The model represents the data, and does nothing else. 
//The model does NOT depend on the controller or the view. __Tom Dalling_
const mongoose = require("../db/connection");
const bcrypt   = require('bcrypt-nodejs');

const Schema = mongoose.Schema;

const User = new Schema({
    local: { 
      username: String,
      password: String, 
    },

    stats: [
      {
        type: Schema.Types.ObjectId,
        ref: "Stats"
      }
    ],

    regimen: [
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
  