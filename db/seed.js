const User = require("../models/User");
const { Regimen } = require("../models/Regimen");
const bcrypt = require("bcrypt-nodejs");

const createPassword = password =>
  bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);

User.find({}).remove(() => {
  Regimen.find({}).remove(() => {
    let bugs = User.create({
      local: {
        email: "bugsbunny@gmail.com",
        password: createPassword("bugsbunny")
      }
    }).then(user => {
      Promise.all([
        Regimen.create({
          content: "eh, what's up doc?",
          author: user._id
        }).then(regimen => {
          user.regimen.push(regimen);
        }),
        Regimen.create({
          content: "That's all, folks!",
          author: user._id
        }).then(regimen => {
          user.regimen.push(regimen);
        })
      ]).then(() => {
        user.save(err => console.log(err));
      });
    });

   
})});