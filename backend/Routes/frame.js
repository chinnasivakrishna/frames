const express = require("express")
const { frames } = require("../Models/Frame")
const cors = require("cors")

const frame = express.Router();
const app = express();
app.use(cors())

frame.route("/insert").post(async (req, res) => {
  try {
    const insertNew = new frames(req.body)
    await insertNew.save();
    if (insertNew) {
      res.json({ message: "New one inserted successfull" })
    }
    else {
      res.json({message:"Failed"})
    }
  } catch (error) {
    res.json({message:error})
  }
})

frame.route("/fetch").get(async (req, res) => {
  try {
    const fetch = await frames.find()
    console.log(fetch)
    res.json({ fetch })
    
  } catch (error) {
    res.json({message:error})
  }
})

module.exports = frame