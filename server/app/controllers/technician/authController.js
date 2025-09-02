// const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const nodemailer = require("nodemailer");
// const sendEmailVerificationOTP = require("../helper/sendOtpVerify");
// const otpModel = require("../models/");
// const { comparePassword } = require("../middleware/auth");
const Technician = require("../../models/Mechanic");

// @desc    User Signup with Email Verification
// exports.signup = async (req, res) => {
//   try {
//     const { name, email, password, phone, address } = req.body;

//     // Check if user already exists
//     let existingUser = await User.findOne({ email });
//     if (existingUser) {
//       return res.status(400).json({ message: "Email already registered" });
//     }

//     // Hash password
//     const hashedPassword = await bcrypt.hash(password, 10);

//     // Create verification token
//     const verificationToken = crypto.randomBytes(32).toString("hex");

//     // Save user
//     const user = new User({
//       name,
//       phone,
//       email,
//       address,
//       password: hashedPassword,
//       address,
//       verificationToken,
//     });
//     const data = await user.save();
//     sendEmailVerificationOTP(req, user);
    

//     res.status(201).json({
//       status:true,
//       message:
//         "Signup successful! Please check your email to verify your account.",
//         data:data
//     });
//   } catch (error) {
//     console.error("Signup Error:", error);
//     res.status(500).json({ message: "Server error" });
//   }
// };

// @desc    Technician Login
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.send(
        "<script>alert('All fields are required'); window.location='/Technician/login';</script>"
      );
    }

    // ✅ Correct: use lowercase for instance
    const technician = await Technician.findOne({ email });
    if (!technician) {
      return res.send(
        "<script>alert('Technician not found'); window.location='/Technician';</script>"
      );
    }

    if (technician.password !== password) {
      return res.send(
        "<script>alert('Incorrect password'); window.location='/Technician/login';</script>"
      );
    }

    // Save Technician info in session
    req.session.technician = {
      _id: technician._id,
      name: technician.name,
      email: technician.email,
    };

    // Redirect to dashboard
    return res.redirect("/Technician/dashboard");
  } catch (error) {
    console.error("Login Error:", error);
    return res.send(
      "<script>alert('Server error'); window.location='/Technician/login';</script>"
    );
  }
};


exports.logout = (req, res) => {
  // Destroy session from server
  req.session.destroy((err) => {
    if (err) {
      console.error("Logout Error:", err);
      return res.send(
        "<script>alert('Error logging out'); window.location='/Technician/dashboard';</script>"
      );
    }

    // Clear session cookie from browser
    res.clearCookie("connect.sid", {
      path: "/", // must match cookie path
      httpOnly: true, // ensure cookie is not accessible via JS
      secure: false, // set true if using https
      sameSite: "lax", // or "strict" for more security
    });

    // Redirect to login page
    return res.redirect("/Technician");
  });
};

exports.forgotPassword = async (req, res) => {
    try {
      const { email } = req.body;

      if (!email) {
        return res.status(400).json({
          status: false,
          message: "Email is required",
        });
      }

      const user = await userModel.findOne({ email });

      if (!user) {
        return res.status(404).json({
          status: false,
          message: "User not found",
        });
      }

      // Generate and send reset OTP
      await sendEmailVerificationOTP(req, user); // Reuse same send OTP helper

      return res.status(200).json({
        status: true,
        message: "Reset OTP has been sent to your email",
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        status: false,
        message: "Failed to send reset OTP. Please try again later.",
      });
    }
  }

 exports.resetPassword = async (req, res) => {
    try {
      const { email, otp, newPassword } = req.body;

      if (!email || !otp || !newPassword) {
        return res.status(400).json({
          status: false,
          message: "All fields are required",
        });
      }

      const user = await userModel.findOne({ email });

      if (!user) {
        return res.status(404).json({
          status: false,
          message: "User not found",
        });
      }

      const otpEntry = await otpModel.findOne({ userId: user._id, otp });

      if (!otpEntry) {
        return res.status(400).json({
          status: false,
          message: "Invalid or expired OTP",
        });
      }

      // Check if OTP expired
      const currentTime = new Date();
      const expirationTime = new Date(
        otpEntry.createdAt.getTime() + 15 * 60 * 1000
      );
      if (currentTime > expirationTime) {
        await sendEmailVerificationOTP(req, user); // Send new OTP
        return res.status(400).json({
          status: false,
          message: "OTP expired. A new OTP has been sent.",
        });
      }

      // Update the password
      user.password = hashedPassword(newPassword);
      await user.save();

      // Remove used OTP
      await otpModel.deleteMany({ userId: user._id });

      return res.status(200).json({
        status: true,
        message: "Password has been reset successfully",
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        status: false,
        message: "Unable to reset password. Please try again later.",
      });
    }
  }