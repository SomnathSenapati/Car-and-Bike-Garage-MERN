const express = require("express");
const { login, logout } = require("../../controllers/technician/authController");


const router = express.Router();

// router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);
// router.post("/forgot-password", forgotPassword);
// router.post("/reset-password", resetPassword);


module.exports = router;
