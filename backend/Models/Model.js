const { Schema, model } = require("mongoose");

const TaskSchema = new Schema({
  userEmail: {
    type: String,
    required: true,
  },
  userPassword: {
    type: String,
    required: true,
  },
  userName: {
    type: String,
    required: true,
  },
  userPhonenumber: {
    type: Number,
    required: true,
  }
});

const User = model("Users", TaskSchema);
module.exports = { User };
