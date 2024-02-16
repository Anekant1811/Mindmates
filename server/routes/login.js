const express = require("express");
const login = express.Router();
const OAuth2Strategy = require("passport-google-oauth2").Strategy;
const passport = require("passport");
const User = require("../db/schema/loginSchema");

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

login.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

login.get(
  "/auth/google/callback",
  passport.authenticate("google", {
    successRedirect: `${process.env.BASE_URL}/`,
    failureRedirect: `${process.env.BASE_URL}/`,
  })
);

login.get("/login/sucess", async (req, res) => {
  if (req.user) {
    const jwtToken = jwt.sign(
      {
        user: req.user._id,
      },
      process.env.SECRET_KEY,
      {
        expiresIn: "1d",
      }
    );
    res.status(200).json({ message: "user Login", user: req.user, jwtToken });
  } else {
    res.status(202).json({ message: "Not Authorized" });
  }
});

login.get("/logout", (req, res, next) => {
  req.logout(function (err) {
    if (err) {
      return next(err);
    }
    res.redirect(`${process.env.BASE_URL}/`);
  });
});

module.exports = login;
