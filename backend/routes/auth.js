const express = require("express");
const router = express.Router();
const User = require("../models/User");
const { body, validationResult } = require("express-validator");
const bcrypt=require('bcryptjs');
const jwt=require('jsonwebtoken')
const JWT_SECRET='Shashankisagood$boy'
router.post(
  "/createUser",
  [
    body("email", "Enter a valid email").isEmail(),
    body("name", "Enter a valid name").isLength({ min: 5 }),
    body("password", "Enter a valid password").isLength({ min: 5 }),
  ],
  async (req, res) => {
    // console.log(req.body);
    // const user = User(req.body);
    // user.save();
    // res.json(req.body);

    //If there is an error, return error and Bad Request
    try {
      const error = validationResult(req);
      if (!error.isEmpty()) {
        return res.status(400).json({ errors: error.array() });
      }
      let user = await User.findOne({ email: req.body.email });
      if (user) {
        return res
          .status(400)
          .json({ errors: "Sorry a user with this mail ID exists" });
      }

      const salt=await bcrypt.genSalt(10);
      const secPass=await bcrypt.hash(req.body.password,salt);
      user = await User.create({
        name: req.body.name,
        password: secPass,
        email: req.body.email,
      });

      // .then(user => res.json(user))
      // .catch(err=>res.json({error: "Enter a Unique Value"}));
      const data={
       "user" :{
          id:user.id
        }
      }
      const authToken=jwt.sign(data,JWT_SECRET)
      res.json({authToken});
    } catch (error) {
      res.status(500).send("Some Error");
      console.error(error);
    }
  }
);

module.exports = router;
