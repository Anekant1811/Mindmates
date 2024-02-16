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

// Paths
app.use("/api/login", login);
app.use("/api/mindmate", mindmate);

// Listening to the port
server.listen(process.env.PORT, () => {
  console.log("Server started");
});
