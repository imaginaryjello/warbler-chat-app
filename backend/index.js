const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();

const userAuthentication = require("./controller/userAuthentication");

//Connecting to the database

//Initializing the express app
const app = express();

//middleware
app.use(cors());
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);

//Routes
app.post("/api/auth/register", async (req, res) => {
  try {
    console.log("register func called");
    await userAuthentication.register(req, res);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Internal server error",
    });
  }
});

app.get("/Home", (req, res) => {
  res.redirect("/Home");
});

//Listening to the server
const PORT = process.env.PORT;

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => app.listen(PORT, console.log(`Server running ${PORT}`)))
  .catch((error) => console.log(error));
