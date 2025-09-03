// models/Bill.js
const mongoose = require("mongoose");

const billSchema = new mongoose.Schema({
  bookingId: { type: mongoose.Schema.Types.ObjectId, ref: "Booking", required: true },
  invoiceNumber: { type: String, required: true, unique: true },
  customer: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  services: [{ type: mongoose.Schema.Types.ObjectId, ref: "Service" }],
  mechanic: { type: mongoose.Schema.Types.ObjectId, ref: "Mechanic" },
  amount: { type: Number, required: true },
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Bill", billSchema);
