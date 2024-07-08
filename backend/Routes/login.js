const express = require('express');
const { User } = require('../Models/Model');
const login = express.Router();

login.route("/login").post(async (req, res) => {
  const { userEmail, userPassword } = req.body;
  try {
    const user = await User.findOne({ userEmail, userPassword });
    if (user) {
      res.send({ message: "login successful" });
    } else {
      res.json("Invalid Credentials");
    }
  } catch (error) {
    res.json({ message: error });
  }
});

module.exports = login;
