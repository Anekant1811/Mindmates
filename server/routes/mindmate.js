const express = require("express");
const mindmate = express.Router();
const Mindmate = require("../db/schema/mindmateSchema");
const { validateToken } = require("../middleware/index");

mindmate.post("/create", (req, res) => {
  const { email, password, name } = req.body;

  const mate = Mindmate({ email, password, name });
  mate
    .save()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
});

mindmate.get("/get", validateToken, async (req, res) => {
  const { id } = req.body;

  const response = await Mindmate.findById(id);
  res.send(response);
});

mindmate.post("/update", validateToken, async (req, res) => {
  const { id } = req;
  const { email, password, name } = req.body;

  const response = await Mindmate.updateOne(
    { _id: id },
    { email, password, name }
  );
  res.send(response);
});

mindmate.get("/get-all", async (req, res) => {
  const response = await Mindmate.find();
  res.send(response);
});

module.exports = mindmate;
