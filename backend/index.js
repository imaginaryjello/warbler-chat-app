const express = require("express");
const dotenv = require("dotenv").config();
const axios = require("axios");
const bodyParser = require("body-parser");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const authRoutes = require("./routes/authRoutes");
const mongoose = require("mongoose");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const corsOptions = {
  origin: "http://localhost:5173",
  credentials: true,
};
app.use(cors(corsOptions));
app.use(cookieParser());

app.use("/", authRoutes);
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("connected to db");
  })
  .catch((err) => {
    console.log("not connected to db");
    console.log(err);
  });

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
