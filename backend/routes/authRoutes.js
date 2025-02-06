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

router.post("/login", loginUser);
router.get("/profile", getProfile);
router.get("/protected", authMiddleware, (req, res) => {
  res.json({ message: "Protected route" });
});

module.exports = router;
