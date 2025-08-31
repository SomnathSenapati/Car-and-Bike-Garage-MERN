const express = require("express");
const router = express.Router();
const vehicleController = require("../controllers/vehicleController");

router.get("/", vehicleController.getVehicles);
router.get("/type/:type", vehicleController.getVehiclesByType);
router.get("/brand/:brand", vehicleController.getVehiclesByBrand);
router.get("/model/:model", vehicleController.getVehiclesByModel);

module.exports = router;
