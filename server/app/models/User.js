const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    address: { type: String },
    password: { type: String, required: true }, 
    isVerified:{type:String, default:false}
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
