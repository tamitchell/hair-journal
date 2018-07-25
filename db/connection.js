const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/user-info");
mongoose.Promise = Promise;
module.exports = mongoose;