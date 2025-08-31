const mongoose = require("mongoose");

const vehicleSchema = new mongoose.Schema(
  {
    type: { type: String, enum: ["Car", "Bike"], required: true },
    brand: { type: String, required: true },
    model: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Vehicle", vehicleSchema);
