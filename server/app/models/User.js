const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    role: {
      type: String,
      enum: ["user", "technician"],
      required: true,
      default:"user"
    },
    address: { type: String },
    password: { type: String, required: true },
    isVerified: { type: String, default: false },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
