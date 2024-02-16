require("dotenv").config();
const express = require("express");
const cors = require("cors");
const session = require("express-session");
const passport = require("passport");
const http = require("http");
var CryptoJS = require("crypto-js");

const login = require("./routes/login");
const mindmate = require("./routes/mindmate");
const connectToDb = require("./db/conn");
const Message = require("./db/schema/messageSchema");
const OAuth2Strategy = require("passport-google-oauth2").Strategy;
const User = require("./db/schema/loginSchema");
const app = express();

// Must things
connectToDb();

// Middlewares
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000",
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
  })
);
app.use(
  session({
    secret: process.env.CLIENT_SECRET_ID,
    resave: true,
    saveUninitialized: true,
  })
);
app.use(passport.initialize());
app.use(passport.session());

passport.use(
  new OAuth2Strategy(
    {
      clientID: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET_ID,
      callbackURL: "/auth/google/callback",
      scope: ["profile", "email"],
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        let user = await User.findOne({ googleId: profile.id });

        if (!user) {
          user = new User({
            googleId: profile.id,
            name: profile.displayName,
            email: profile.emails[0].value,
            profile: profile.photos[0].value,
          });

          await user.save();
        }

        return done(null, user);
      } catch (error) {
        return done(error, null);
      }
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});

app.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

app.get(
  "/auth/google/callback",
  passport.authenticate("google", {
    successRedirect: `http://localhost:3000/dashboard`,
    failureRedirect: `http://localhost:3000`,
  })
);

app.get("/login/sucess", async (req, res) => {
  try {
    if (req.user) {
      res.status(200).json({ message: "user Login", user: req.user });
    } else {
      res.status(202).json({ message: "Not Authorized" });
    }
  } catch (err) {
    console.log(err);
  }
});

app.get("/logout", (req, res, next) => {
  req.logout(function (err) {
    if (err) {
      return next(err);
    }
    res.redirect(`http://localhost:3000`);
  });
});

// Paths
app.use("/api/login", login);
app.use("/api/mindmate", mindmate);

// Listening to the port
app.listen(5000, () => {
  console.log("Server started");
});
