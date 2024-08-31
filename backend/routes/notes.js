const express=require('express')
const router=express.Router();
const fetchuser = require("../middleware/getuser");
const Notes=require('../models/Notes')
//Get all notes for a user
router.get('/fetchallnotes', fetchuser, async (req, res) => {
    try {
        const notes = await Notes.find({ user: req.user.id });
        res.json(notes)
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})

module.exports=router