const mongoose = require("mongoose");

const loginSchema = new mongoose.Schema({
  email: {
    type: String,
    require: true,
  },
  googleId: String,
  name: String,
  profile: String,
  mindmates: Array,
});

const User = mongoose.model("Users", loginSchema);
module.exports = User;
