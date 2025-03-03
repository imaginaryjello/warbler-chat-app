const express = require("express");
const {
  loginUser,
  authMiddleware,
  getProfile,
} = require("../controllers/authControllers");
const mongoose = require("mongoose");
const cors = require("cors");

const router = express.Router();

router.use(
  cors({
    credentials: true,
    origin: "http://localhost:5173",
  })
);


//Routes
router.post("/register", async (req, res) => {
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

router.get("/home", (req, res) => {
  res.redirect("/Home");
});
router.post("/login", loginUser);
router.get("/profile", getProfile);
router.get("/protected", authMiddleware, (req, res) => {
  res.json({ message: "Protected route" });
});

module.exports = router;
