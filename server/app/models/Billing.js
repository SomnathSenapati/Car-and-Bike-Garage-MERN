const mongoose = require("mongoose");

const billingSchema = new mongoose.Schema(
  {
    booking: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Booking",
      required: true,
    },
    totalAmount: { type: Number, required: true },
    paymentStatus: {
      type: String,
      enum: ["Pending", "Paid"],
      default: "Pending",
    },
    paymentDate: { type: Date },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Billing", billingSchema);
