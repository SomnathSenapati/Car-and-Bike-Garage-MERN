const Billing = require("../models/Billing");

exports.createBill = async (req, res) => {
  try {
    const bill = await Billing.create(req.body);
    res.status(201).json(bill);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getBills = async (req, res) => {
  try {
    const bills = await Billing.find().populate("booking");
    res.json(bills);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
