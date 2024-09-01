const express = require("express");
const router = express.Router();
const fetchuser = require("../middleware/getuser");
const Notes = require("../models/Notes");
const { body, validationResult } = require("express-validator");
//Get all notes for a user
router.get("/fetchallnotes", fetchuser, async (req, res) => {
  try {
    const notes = await Notes.find({ user: req.user.id });
    res.json(notes);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});
//Add a new note
router.post(
  "/addanewnote",
  fetchuser,
  [
    body("title", "Enter a valid title").isLength({ min: 5 }),
    body("description", "Enter a valid description").isLength({ min: 5 }),
  ],
  async (req, res) => {

    try {
      const error = validationResult(req);
      if (!error.isEmpty()) {
        res.status(500).json({ error: "Internal server error", details: error.message });

      }
      let {title,description,tag}=req.body
      let notes=new Notes({
        user:req.user.id,
        title:title,
        description:description,
        tag:tag,
        date:Date.now()
      })
      const savednote= await notes.save()
      res.json(savednote)
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: "Internal server error", details: error.message });
    }
  }
);
module.exports = router;
