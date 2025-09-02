const mongoose = require("mongoose");

const mechanicSchema = new mongoose.Schema(
  {
    name: { type: String, require: true },
    phone: { type: String, require: true },
    skillset: { type: [String], default: [] }, // Example: ["Oil Change", "Dent Repair"]
    experience: { type: Number, require: true },
    address: { type: [String], require: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Mechanic", mechanicSchema);
