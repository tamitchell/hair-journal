// const User = require("../models/User");
// // const { Regimen } = require("../models/Regimen");
// const bcrypt = require("bcrypt-nodejs");

// const createPassword = password =>
//   bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);

// User.find({}).remove(() => {
//   Regimen.find({}).remove(() => {
//     let sadatay = User.create({
//       local: {
//         username: "Sadatay",
//         password: createPassword("bugsbunny")
//       },
//       stats: {
//         hairtype: "4A/4B",
//         hairlength: "2in",
//         hairdensity: "Thick",
//         hairporosity: "Med",
//       },
//       regimens: {
//         [
//           { author: user._id,
//         routines: [ {
//           Name: String,
//           description: String,
//           moisturizing: String,
//           detangling: String,
//           washing: String,
//           trimming: String,
//           additionalNotes: String,
//         }],
//         createdAt: {
//           type: Date,
//           default: Date.now()
//         }}
//       ]
//       }
//     })
//     }).then(user => {
//       Promise.all([
//         Regimen.create({
//           author: user._id,
//           description: "Stuff"
//         }).then(regimen => {
//           user.regimen.push(regimen);
//         }),
//         Regimen.create({
//           author: user._id,
//           description: "That's all, folks!",
//         }).then(regimen => {
//           user.regimen.push(regimen);
//         })
//       ]).then(() => {
//         user.save(err => console.log(err));
//       });
//     });

   
// });