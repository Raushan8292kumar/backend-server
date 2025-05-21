const express = require("express");
const router = express.Router();
const Note=require("./../models/struct");

router.post("/list", async (req, res) => {
  var note = await Note.find({ userid: req.body.userid });
  res.json(note);
});
router.post("/add", async (req, res) => {
  // res.json(req.body);
  await Note.deleteOne({ id: req.body.id });
  const newnote = new Note({
    id: req.body.id,
    userid: req.body.userid,
    title: req.body.title,
    content: req.body.content,
  });
  await newnote.save();
  const response = { message: "new item added" };
  res.json(response);
});
router.post("/remove", async (req, res) => {
  await Note.deleteOne({ id: req.body.id });
  const response = { message: `${req.body.id} is Deleted` };
  res.send(response);
});

module.exports=router;