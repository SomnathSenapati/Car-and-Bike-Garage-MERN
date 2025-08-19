const express = require("express");
const {
  addVehicle,
  getVehicles,
  deleteVehicle,
} = require("../controllers/vehicleController");

const router = express.Router();

router.post("/", addVehicle);
router.get("/", getVehicles);
router.delete("/:id", deleteVehicle);

module.exports = router;
