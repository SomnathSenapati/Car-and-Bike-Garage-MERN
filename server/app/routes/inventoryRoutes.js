const express = require("express");
const { addPart, getInventory } = require("../controllers/inventoryController");

const router = express.Router();

router.post("/", addPart);
router.get("/", getInventory);

module.exports = router;
