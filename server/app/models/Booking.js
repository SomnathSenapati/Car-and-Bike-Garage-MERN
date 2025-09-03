const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema(
  {
    customer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    vehicle_type: {
      type: String,
      required: true,
    },
    vehicle_brand: {
      type: String,
      required: true,
    },
    vehicle_model: {
      type: String,
      required: true,
    },
    vehicle_number: {
      type: String,
      required: true,
    },
    service: {
      type: String,
      required: true,
    },
    mechanic: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Mechanic",
      default: null,
    },

    bookingDate: { type: Date, default: Date.now },
    status: {
      type: String,
      enum: ["Pending", "Booked", "Rejected", "In Progress", "Completed"],
      default: "Pending",
    },
    bill: { type: mongoose.Schema.Types.ObjectId, ref: "Bill" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Booking", bookingSchema);
