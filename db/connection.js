const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/regimen");
mongoose.Promise = Promise;
module.exports = mongoose;