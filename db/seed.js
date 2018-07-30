const User = require("../models/User");
const { Regimen } = require("../models/Regimen");
const bcrypt = require("bcrypt-nodejs");

const createPassword = password =>
  bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);

User.find({}).remove(() => {
  Regimen.find({}).remove(() => {
    let bugs = User.create({
      local: {
        username: "bugsbunny@gmail.com",
        password: createPassword("bugsbunny")
      }
    }).then(user => {
      Promise.all([
        Regimen.create({
          author: user._id,
          description: "Stuff"
        }).then(regimen => {
          user.regimen.push(regimen);
        }),
        Regimen.create({
          author: user._id,
          description: "That's all, folks!",
        }).then(regimen => {
          user.regimen.push(regimen);
        })
      ]).then(() => {
        user.save(err => console.log(err));
      });
    });

   
})});