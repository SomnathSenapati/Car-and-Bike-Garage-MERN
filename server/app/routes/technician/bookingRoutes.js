const express = require("express");
const BookingController = require("../../controllers/technician/BookingController");
const router = express.Router();

router.get("/booking/list", BookingController.bookingList);
router.post("/booking/:id/start", BookingController.startBooking);
router.post("/booking/:id/complete", BookingController.completeBooking);


module.exports = router;
