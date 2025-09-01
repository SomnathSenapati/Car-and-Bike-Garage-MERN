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
// Get bookings for a specific user (customer)
exports.getBookingsByUser = async (req, res) => {
  try {
    const { userId } = req.params; // userId will come from the URL

    const bookings = await Booking.find({ customer: userId })
      .populate("customer", "name email phone role")
      .populate("mechanic", "name email phone role");

    if (!bookings || bookings.length === 0) {
      return res.status(404).json({ message: "No bookings found for this user" });
    }

    res.json(bookings);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
exports.confirmBooking = async (req, res) => {
  try {
    const booking = await Booking.findByIdAndUpdate(
      req.params.id,
      { status: "Booked" }, // ✅ now valid
      { new: true }
    ).populate("customer mechanic");

    if (!booking) return res.status(404).json({ error: "Booking not found" });

    res.json({ message: "Booking confirmed successfully", booking });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.rejectBooking = async (req, res) => {
  try {
    const booking = await Booking.findByIdAndUpdate(
      req.params.id,
      { status: "Rejected" }, // ✅ now valid
      { new: true }
    ).populate("customer mechanic");

    if (!booking) return res.status(404).json({ error: "Booking not found" });

    res.json({ message: "Booking rejected successfully", booking });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
