const express = require('express');
const router = express.Router();
const adminController = require('../../controllers/admin/admincontroller');
const { isAdminLoggedIn } = require('../../middleware/auth');

router.get("/", adminController.authPage);
router.get("/dashboard", isAdminLoggedIn, adminController.dashboard);

module.exports = router;

