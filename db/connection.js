const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/growthsphere");
// if (process.env.NODE_ENV == "production") {
//     mongoose.connect(process.env.MLAB_URL)
//   } else {
//     mongoose.connect("mongodb://localhost/growthsphere");
//   }
mongoose.Promise = Promise;
module.exports = mongoose;