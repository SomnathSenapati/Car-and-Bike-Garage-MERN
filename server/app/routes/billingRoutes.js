const express = require("express");
const {  generateBill } = require("../controllers/billingController");

const router = express.Router();

// router.post("/", createBill);
// router.get("/", getBills);
router.post("/bill/:id/generate", generateBill);

module.exports = router;
