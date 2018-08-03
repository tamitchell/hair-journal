const express = require("express");
const hbs = require("hbs");
const flash = require("connect-flash");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const session = require("express-session");
const passport = require("passport");
const methodOverride = require("method-override");
const app = express();
const path = require('path')

require('dotenv').config()


require("./config/passport")(passport);
app.use(function (req, res, next) {
  res.locals.currentUser = req.user;
  next();
});

hbs.registerPartials(__dirname + "/views/partials");


// for external files
app.use(express.static(path.join(__dirname, '/public')));

app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "hbs");
app.use(methodOverride("_method"));
//IMPORTANT SNIPPET FROM https://stackoverflow.com/questions/22298033/nodejs-passport-error-oauthstrategy-requires-session-support
app.use(session({
  resave: false,
  saveUninitialized: true,
  secret: 'yass' 
}));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());

app.use(require("./routes/index.js"));


app.listen(5000, () => console.log("WUBBA LUBBA DUB DUB. Running on port 5000"));

// app.set('port', process.env.PORT || 3001)

// app.listen(app.get('port'), () => {
//   console.log(`✅ PORT: ${app.get('port')} 🌟`)
// })