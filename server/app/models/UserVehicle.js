const mongoose = require("mongoose");

const UservehicleSchema = new mongoose.Schema(
  {
    customer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
    type: { type: String, enum: ["Car", "Bike"], required: true },
    brand: { type: String, required: true },
    model: { type: String, required: true },
    registrationNumber: { type: String, required: true, unique: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("UserVehicle", UservehicleSchema);
