const express = require("express");
const { createBill, getBills } = require("../controllers/billingController");

const router = express.Router();

router.post("/", createBill);
router.get("/", getBills);

module.exports = router;
