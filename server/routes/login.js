const express = require("express");
const login = express.Router();
const User = require("../db/schema/loginSchema");

login.post("/get-one/:id", async (req, res) => {
  const { id } = req.params;

  const response = await User.findById(id);
  res.send(response);
});

module.exports = login;
