const mongoose = require("mongoose");

//Creating a schema for the user
const userDetail = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

//Exporting the schema
module.exports = mongoose.model("User", userDetail);
