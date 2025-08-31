const Booking = require("../models/Booking");

// Create booking
exports.createBooking = async (req, res) => {
  try {
    const booking = await Booking.create(req.body);
    res.status(201).json(booking);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get all bookings with populated customer & mechanic
exports.getBookings = async (req, res) => {
  try {
    const bookings = await Booking.find()
      .populate("customer", "name email phone role") 
      .populate("mechanic", "name email phone role");
    res.json(bookings);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update booking status
exports.updateBookingStatus = async (req, res) => {
  try {
    const booking = await Booking.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    }).populate("customer mechanic");
    res.json(booking);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Assign mechanic to booking
exports.assignMechanic = async (req, res) => {
  try {
    const { mechanicId } = req.body;
    const booking = await Booking.findByIdAndUpdate(
      req.params.id,
      { mechanic: mechanicId },
      { new: true }
    ).populate("mechanic", "name email phone role");
    res.json(booking);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
