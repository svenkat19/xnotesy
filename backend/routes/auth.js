const express = require("express");
const router = express.Router();
const User = require("../models/User");
const { body, validationResult } = require("express-validator");
router.post(
  "/",
  [
    body("email", "Enter a valid email").isEmail(),
    body("name", "Enter a valid name").isLength({ min: 5 }),
    body("password", "Enter a valid password").isLength({ min: 5 }),
  ],
  (req, res) => {
    // console.log(req.body);
    // const user = User(req.body);
    // user.save();
    // res.json(req.body);
    const error = validationResult(req);
    if (!error.isEmpty()) {
      return res.status(400).json({ errors: error.array() });
    }
    User.create({
      name: req.body.name,
      password: req.body.password,
      email: req.body.email,
    }).then(user => res.json(user))
    .catch(err=>res.json({error: "Enter a Unique Value"}));
  }
);

module.exports = router;
