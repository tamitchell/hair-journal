const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/growthsphere");
mongoose.Promise = Promise;
module.exports = mongoose;