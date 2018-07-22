const User = require("../models/User");
const { Tweet } = require("../models/Regimen");
const bcrypt = require("bcrypt-nodejs");

const createPassword = password =>
  bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);

User.find({}).remove(() => {
  Tweet.find({}).remove(() => {
    let bugs = User.create({
      local: {
        email: "bugsbunny@gmail.com",
        password: createPassword("bugsbunny")
      }
    }).then(user => {
      Promise.all([
        Tweet.create({
          content: "eh, what's up doc?",
          author: user._id
        }).then(tweet => {
          user.tweets.push(tweet);
        }),
        Tweet.create({
          content: "That's all, folks!",
          author: user._id
        }).then(tweet => {
          user.tweets.push(tweet);
        })
      ]).then(() => {
        user.save(err => console.log(err));
      });
    });

   
})});