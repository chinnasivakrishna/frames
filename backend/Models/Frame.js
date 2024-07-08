const { text } = require("body-parser");
const { Schema, model } = require("mongoose");

const frame = new Schema({
  title: {
    type: String,
    required: true
  },
  video_link: {
    type: String,
    required: true
  },
  i_frame: {
    type: String,
    required: true
  },
  video_link2: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  }
});

const frames = model("frame", frame);
module.exports = { frames };