const express = require("express")
const { frames } = require("../Models/Frame")
const cors = require("cors")

const frame = express.Router();
const app = express();
app.use(cors())


frame.route("/fetch").get(async (req, res) => {
  try {
    const fetch = await frames.find()
    console.log(fetch)
    res.json({ fetch })
    res.send({message:fetch})
    
  } catch (error) {
    res.json({message:error})
  }
})

module.exports = fetch