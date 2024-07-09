require("dotenv").config();

const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const { User } = require("./Models/Model");
const login = require("./Routes/login")
const register = require("./Routes/register")
const frame = require("./Routes/frame")
const fetch = require("./Routes/fetchFrame")
const cors = require("cors")



const app = express();
app.use(bodyParser.json());
app.use(function (req, res, next) {
    //Enabling CORS
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, 
    Accept, x-client-key, x-client-token, x-client-secret, Authorization");
      next();
    });
const DB_URL = process.env.MONGO_URL;

mongoose.connect(DB_URL, {
  serverSelectionTimeoutMS: 30000, 
})
  .then(() => console.log("Database connected"))
  .catch((err) => {
    console.error("Database connection error:", err);
    process.exit(1); 
  });   

app.get("/", async (req, res) => {
    try {
      const check = await User.find();
      res.json(check)
    } catch (error) {
      console.log(error)
    }
  })

app.use("/user", register)

app.use("/user", login)

app.use("/user",frame)

app.use("/user",fetch)


  app.listen(8001, () => {
  console.log("Server started on port 8001");
});

