const express = require("express");
const { addService, getServices } = require("../controllers/serviceController");

const router = express.Router();

router.post("/", addService);
router.get("/", getServices);

module.exports = router;
