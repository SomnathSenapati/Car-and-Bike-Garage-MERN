const Vehicle = require("../models/Vehicle");

// Get all vehicles
exports.getVehicles = async (req, res) => {
  try {
    const vehicles = await Vehicle.find();
    res.json(vehicles);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get vehicles by type (Car / Bike)
exports.getVehiclesByType = async (req, res) => {
  try {
    const { type } = req.params; // e.g. /vehicles/type/Car
    const vehicles = await Vehicle.find({ type: type });
    if (!vehicles.length) {
      return res
        .status(404)
        .json({ message: `No vehicles found for type: ${type}` });
    }
    res.json(vehicles);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get vehicles by brand
exports.getVehiclesByBrand = async (req, res) => {
  try {
    const { brand } = req.params; // e.g. /vehicles/brand/Honda
    const vehicles = await Vehicle.find({ brand: new RegExp(brand, "i") }); // case-insensitive search
    if (!vehicles.length) {
      return res
        .status(404)
        .json({ message: `No vehicles found for brand: ${brand}` });
    }
    res.json(vehicles);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get vehicles by model
exports.getVehiclesByModel = async (req, res) => {
  try {
    const { model } = req.params; // e.g. /vehicles/model/City
    const vehicles = await Vehicle.find({ model: new RegExp(model, "i") }); // case-insensitive search
    if (!vehicles.length) {
      return res
        .status(404)
        .json({ message: `No vehicles found for model: ${model}` });
    }
    res.json(vehicles);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
