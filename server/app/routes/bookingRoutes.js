const express = require("express");
const {
  createBooking,
  getBookings,
  updateBookingStatus,
  assignMechanic,
  getBookingsByUser,
  confirmBooking,
  rejectBooking, 
} = require("../controllers/bookingController");

const router = express.Router();

router.post("/", createBooking);
router.get("/", getBookings);
router.get("/user/:userId", getBookingsByUser);
router.put("/:id", updateBookingStatus);
router.put("/:id/assign-mechanic", assignMechanic);
router.put("/:id/confirm", confirmBooking);
router.put("/:id/reject", rejectBooking);


module.exports = router;
