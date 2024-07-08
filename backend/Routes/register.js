const express = require("express")
const { User } = require("../Models/Model")
const cors = require("cors")

const register = express.Router();

const app = express();
app.use(cors());

register.route("/register").post(async (req, res) => {
  try {
    const newUser = new User(req.body)
    await newUser.save();
    if (newUser) {
      res.json({message:"User added Successfull"})
    }
    else {
      res.json({message:"failed"})
    }
  } catch (error) {
    res.json({ message: error })
    console.log(error)
  }
})

module.exports = register