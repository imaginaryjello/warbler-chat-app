const mongoose = require("mongoose");
const User = require("../model/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

/////////////////Login User/////////////////////
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      res.status(404).json({ message: "not found" });
      console.log("User not found");
    }
    // const isValidPassword = await bcrypt.compare(password, user.password);
    const isValidPassword = password === user.password;
    if (isValidPassword) {
      //generating token for user
      jwt.sign(
        { email: user.email },
        process.env.JWT_SECRET,
        {},
        (err, token) => {
          if (err) {
            console.log(err);
          } else {
            console.log("Generated token:", token);
            res.status(200).json({
              message: "Login Sucessfull",
              token,
              user: { email: user.email },
            });
          }
        }
      );
      // res.status(200).json({ message: "Login sucessfully" });

      console.log("Login sucessfully");
    } else {
      res.status(401).json({ message: "Invalid password" });
      console.log("Invalid password");
    }
  } catch (error) {
    console.log(error);
  }
};

////////////////Auth Middleware/////////////////////

const authMiddleware = async (req, res, next) => {
  const authHeader = req.header("Aunthentication");

  console.log("Auntehntication:", authHeader); //To check presence of token in header

  if (!authHeader || !authHeader.startsWith("Bearer")) {
    return res.status("401").json({ message: "Token not found" });
  }
  const token = authHeader.replace("Bearer", " "); //removing bearer from token
  try {
    const decoded = token.verify(token, process.env.JWT_SECRET);
    req.user = await User.findOne(decoded.email).select("-password");
    console.log("decode token:", decoded);
    next();
  } catch (error) {
    res.status(401).json({ message: "Invalid token" });
    console.log("Invalid token", error);
  }
};

/////GET PROFILE/////

const getProfile = async (req, res) => {
  const {token} = req.cookies;
  if (token) {
    jwt.verify(token, process.env.JWT_SECRET, {}, (err, user) => {
      if (err) throw err;
      re.json(user);
    });
  } else {
    res.json(null);
  }
};
module.exports = {
  loginUser,
  authMiddleware,
  getProfile,
};
