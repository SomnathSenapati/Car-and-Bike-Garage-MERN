const express = require("express");
const {
  createBooking,
  getBookings,
  updateBookingStatus,
  assignMechanic,
} = require("../controllers/bookingController");

const router = express.Router();

router.post("/", createBooking);
router.get("/", getBookings);
router.put("/:id", updateBookingStatus);
router.put("/:id/assign-mechanic", assignMechanic);


module.exports = router;
