const mongoose = require("mongoose");

const inventorySchema = new mongoose.Schema(
  {
    partName: { type: String, required: true },
    description: { type: String },
    quantity: { type: Number, required: true, default: 0 },
    unitPrice: { type: Number, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Inventory", inventorySchema);
