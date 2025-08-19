const mongoose = require("mongoose");

const serviceSchema = new mongoose.Schema(
  {
    serviceName: { type: String, required: true },
    description: { type: String },
    cost: { type: Number, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Service", serviceSchema);
