// const { Regimen } = require("../models/Regimen");
// const passport = require("passport");


// module.exports = {
//   show: (req, res) => {
//     Regimen.findOne({ _id: req.params.id })
//       .populate("author")
//       .exec(function(err, regimen) {
//         Regimen.populate(regimen, { path: "author" }, function(
//           err,
//           regimen
//         ) {
//           console.log(regimen);
//           res.render("user/profile/regimen/show", regimen);
//         });
//       });
//   },
//   new: (req, res) => {
//     res.render("/profile/regimen/new");
    
//   },
//   createRegimen: (req, res) => {
//     Regimen.create({
//       // description: req.body.regimen.description,
//       author: req.user._id
//     }).then(regimenInstance => {
//       req.user.regimen.push(regimenInstance);
//       req.user.save(err => {
//         res.redirect(`/user/profile/${user.regimen}`);
//       });
//     });
//   },
//   update: (req, res) => {
//     let { content } = req.body;
//     Regimen.findOne({ _id: req.params.id }).then(regimen => {
//       regimen.push({
//         content,
//         author: req.user._id
//       });
//       regimen.save(err => {
//         res.redirect(`/regimen/${regimen._id}`);
//       });
//     });
//   },
//   requireAuth: function(req, res, next) {
//     if (req.isAuthenticated()) {
//       next();
//     } else {
//       res.redirect("/");
//     }
//   }
// };