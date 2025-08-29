const mongoose = require("mongoose");

const mechanicSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    phone: { type: String, required: true },
    skillset: { type: [String], default: [] }, // Example: ["Oil Change", "Dent Repair"]
    experience: { type: Number, required: true },
    address: { type: [String], required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Mechanic", mechanicSchema);
