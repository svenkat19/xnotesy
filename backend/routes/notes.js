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
        res
          .status(500)
          .json({ error: "Internal server error", details: error.message });
      }
      let { title, description, tag } = req.body;
      let notes = new Notes({
        user: req.user.id,
        title: title,
        description: description,
        tag: tag,
        date: Date.now(),
      });
      const savednote = await notes.save();
      res.json(savednote);
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .json({ error: "Internal server error", details: error.message });
    }
  }
);
//Update note
router.put(
  "/updatenote/:id",
  fetchuser,

  async (req, res) => {
    try {
      const { title, description, tag } = req.body;
      const newNote = {};
      if (title) {
        newNote.title = title;
      }
      if (description) {
        newNote.description = description;
      }
      if (tag) {
        newNote.tag = tag;
      }

      let notes = await Notes.findById(req.params.id);
      if (!notes) {
        req.status(404).send("Not found");
      }
      if (notes.user.toString() !== req.user.id)
        return res.status(401).send("Not allowed");
      notes = await Notes.findByIdAndUpdate(
        req.params.id,
        { $set: newNote },
        { new: true }
      );
      res.json({ notes });
    } catch (error) {
      res.send(error);
    }
  }
);
//Delete Note
router.delete(
  "/deletenote/:id",
  fetchuser,

  async (req, res) => {
    try {
      let notes = await Notes.findById(req.params.id);
      if (!notes) {
        res.status(404).send("Not found");
      }
      //Allow deletion only if user deletes the notes
      if (notes.user.toString() !== req.user.id)
        return res.status(401).send("Not allowed");
      notes = await Notes.findByIdAndDelete(req.params.id);
      res.json({ Success: "Note Deleted", notes: notes });
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error");
    }
  }
);
module.exports = router;
