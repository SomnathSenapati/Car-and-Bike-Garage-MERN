const express = require("express");
const BookingController = require("../../controllers/technician/BookingController");
const router = express.Router();

router.get("/booking/list", BookingController.bookingList);
router.put("/booking/:id/start", BookingController.startBooking);
router.put("/booking/:id/complete", BookingController.completeBooking);

module.exports = router;
