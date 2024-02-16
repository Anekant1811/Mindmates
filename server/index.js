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

// Must things
const app = express();
const server = http.createServer(app);
const io = require("socket.io")(server);
connectToDb();

// Middlewares
app.use(express.json());
app.use(
  session({
    secret: process.env.CLIENT_SECRET_ID,
    resave: false,
    saveUninitialized: true,
    cookie: {
      secure: true, // Set to true in production
      sameSite: "None",
    },
  })
);
app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
  })
);
app.use(passport.initialize());
app.use(passport.session());

// Socket server

io.on("connection", (socket) => {
  console.log(`Connected`);

  socket.on("join", ({ userId }) => {
    console.log(`${userId} User Joined`);
    socket.join(userId);
  });

  socket.on("message", async ({ from, to, message }) => {
    try {
      // Encryption
      message = CryptoJS.AES.encrypt(
        message,
        process.env.SECRET_KEY
      ).toString();

      let saveMessage = new Message({ sender: from, receiver: to, message });
      io.local.emit("message", saveMessage);
      await saveMessage.save();
    } catch (errors) {
      console.log(errors);
    }
  });

  socket.on("user-chat", async ({ from, id, message, profile, name, _id }) => {
    try {
      let chat = { sender: from, message, profile, name, son: _id };

      let response = await GroupChat.updateOne(
        { _id: id, "chats._id": _id },
        { $push: { "chats.$.messages": chat } }
      );

      io.local.emit("user-chat", chat);
    } catch (errors) {
      console.log(errors);
    }
  });

  socket.on("chat", async ({ from, id, message, profile, name }) => {
    try {
      let chat = { sender: from, message, profile, name };
      let response = await GroupChat.updateOne(
        { _id: id },
        { $push: { chats: chat } }
      );
      console.log(response.modifiedCount);
      io.local.emit("chat", chat);
    } catch (errors) {
      console.log(errors);
    }
  });

  socket.on("disconnect", () => {
    console.log(`Disconnected`);
  });
});

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
    successRedirect: `http://localhost:3000`,
    failureRedirect: `http://localhost:3000`,
  })
);

app.get("/login/sucess", async (req, res) => {
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
server.listen(process.env.PORT, () => {
  console.log("Server started");
});
