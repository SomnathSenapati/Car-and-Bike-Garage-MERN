const express = require("express");
const {
  addMechanic,
  getMechanics,
} = require("../controllers/mechanicController");

const router = express.Router();

router.post("/", addMechanic);
router.get("/", getMechanics);

module.exports = router;
