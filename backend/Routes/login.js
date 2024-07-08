const express = require("express")
const { User } = require("../Models/Model")
const cors = require("cors")

const login = express.Router();

const app = express();
app.use(cors({
  origin:['https://frame-front-end.vercel.app'],
  methods:['Post', 'Get'],
  credentails: true,
}))

login.route("/login").post(async (req, res) => {
  const { userEmail, userPassword } = req.body;
  try {
    const login = await User.findOne({ userEmail, userPassword });
    console.log(login)
    if (login) {
      res.send({message:"login successfull"})
    }
    else {
      res.json("Invalid Creditinals")
    }
  } catch (error) {
    res.json({message:error})
  }
})

module.exports = login
