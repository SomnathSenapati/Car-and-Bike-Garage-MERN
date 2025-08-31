const express = require('express');
const router = express.Router();
const technicianController = require('../../controllers/technician/technicianController');

router.get("/dashboard", technicianController.dashboard);

module.exports = router;

