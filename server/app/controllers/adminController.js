const Customer = require("../models/Customer");
const Mechanic = require("../models/Mechanic");
const Service = require("../models/Service");
const Inventory = require("../models/Inventory");
const Booking = require("../models/Booking");

// ✅ Get dashboard stats
exports.getDashboardStats = async (req, res) => {
  try {
    const totalCustomers = await Customer.countDocuments();
    const totalMechanics = await Mechanic.countDocuments();
    const totalBookings = await Booking.countDocuments();
    const totalServices = await Service.countDocuments();

    res.json({
      totalCustomers,
      totalMechanics,
      totalBookings,
      totalServices,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// ✅ Assign mechanic to booking
exports.assignMechanic = async (req, res) => {
  try {
    const { bookingId, mechanicId } = req.body;
    const booking = await Booking.findByIdAndUpdate(
      bookingId,
      { mechanic: mechanicId, status: "In Progress" },
      { new: true }
    ).populate("mechanic");

    res.json({ message: "Mechanic assigned successfully", booking });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// ✅ Manage Services (Add, Update, Delete)
exports.addService = async (req, res) => {
  try {
    const service = await Service.create(req.body);
    res.status(201).json(service);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateService = async (req, res) => {
  try {
    const service = await Service.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(service);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteService = async (req, res) => {
  try {
    await Service.findByIdAndDelete(req.params.id);
    res.json({ message: "Service deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// ✅ Manage Inventory (Add, Update, Delete)
exports.addPart = async (req, res) => {
  try {
    const part = await Inventory.create(req.body);
    res.status(201).json(part);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updatePart = async (req, res) => {
  try {
    const part = await Inventory.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(part);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deletePart = async (req, res) => {
  try {
    await Inventory.findByIdAndDelete(req.params.id);
    res.json({ message: "Part deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
