const Mechanic = require("../models/Mechanic");

exports.addMechanic = async (req, res) => {
  try {
    const mechanic = await Mechanic.create(req.body);
    res.status(201).json(mechanic);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getMechanics = async (req, res) => {
  try {
    const mechanics = await Mechanic.find();
    res.json(mechanics);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
