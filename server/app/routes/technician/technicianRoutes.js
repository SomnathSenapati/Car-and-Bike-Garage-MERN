const express = require("express");
const router = express.Router();
const technicianController = require("../../controllers/technician/technicianController");
const { AuthCheck1 } = require("../../middleware/auth");

router.get("/", technicianController.authPage);
router.get(
  "/dashboard",
  AuthCheck1,
  technicianController.CheckAuth,
  technicianController.dashboard
);

module.exports = router;
