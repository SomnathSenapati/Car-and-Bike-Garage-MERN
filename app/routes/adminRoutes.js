const express = require("express");
const {
  getDashboardStats,
  assignMechanic,
  addService,
  updateService,
  deleteService,
  addPart,
  updatePart,
  deletePart,
} = require("../controllers/adminController");

const router = express.Router();

// Dashboard stats
router.get("/stats", getDashboardStats);

// Booking management
router.put("/assign-mechanic", assignMechanic);

// Service management
router.post("/service", addService);
router.put("/service/:id", updateService);
router.delete("/service/:id", deleteService);

// Inventory management
router.post("/inventory", addPart);
router.put("/inventory/:id", updatePart);
router.delete("/inventory/:id", deletePart);

module.exports = router;
