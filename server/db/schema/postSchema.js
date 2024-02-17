const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "Users" },
  text: String,
  comments: [
    {
      user: { type: mongoose.Schema.Types.ObjectId, ref: "Users" },
      text: String,
    },
  ],
  likes: {
    type: Array,
    default: [],
  },
});

const Posts = mongoose.model("Postss", postSchema);
module.exports = Posts;
