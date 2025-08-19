const Inventory = require("../models/Inventory");

exports.addPart = async (req, res) => {
  try {
    const part = await Inventory.create(req.body);
    res.status(201).json(part);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getInventory = async (req, res) => {
  try {
    const inventory = await Inventory.find();
    res.json(inventory);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
