const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const nodemailer = require("nodemailer");
const sendEmailVerificationOTP = require("../helper/sendOtpVerify");
const otpModel = require("../models/otpModel");
const { comparePassword } = require("../middleware/auth");

// @desc    User Signup with Email Verification
exports.signup = async (req, res) => {
  try {
    const { name, email, password, phone, address } = req.body;

    // Check if user already exists
    let existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email already registered" });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create verification token
    const verificationToken = crypto.randomBytes(32).toString("hex");

    // Save user
    const user = new User({
      name,
      phone,
      email,
      address,
      password: hashedPassword,
      address,
      verificationToken,
    });
    const data = await user.save();
    sendEmailVerificationOTP(req, user);
    

    res.status(201).json({
      status:true,
      message:
        "Signup successful! Please check your email to verify your account.",
        data:data
    });
  } catch (error) {
    console.error("Signup Error:", error);
    res.status(500).json({ message: "Server error" });
  }
};

// @desc    Verify Email
exports.verifyEmail = async (req, res) => {
  try {
    const { email, otp } = req.body;
    // Check if all required fields are provided
    if (!email || !otp) {
      return res
        .status(400)
        .json({ status: false, message: "All fields are required" });
    }
    const Userexisting = await User.findOne({ email });

    // Check if email doesn't exists
    if (!Userexisting) {
      return res
        .status(404)
        .json({ status: "failed", message: "Email doesn't exists" });
    }

    // Check if email is already verified
    if (Userexisting.isVerified==true) {
      return res
        .status(400)
        .json({ status: false, message: "Email is already verified" });
    }
    // Check if there is a matching email verification OTP
    const emailVerification = await otpModel.findOne({
      userId: Userexisting._id,
      otp,
    });
    if (!emailVerification) {
      if (!Userexisting.isVerified) {
        // console.log(existingUser);
        await sendEmailVerificationOTP(req, Userexisting);
        return res.status(400).json({
          status: false,
          message: "Invalid OTP, new OTP sent to your email",
        });
      }
      return res.status(400).json({ status: false, message: "Invalid OTP" });
    }
    // Check if OTP is expired
    const currentTime = new Date();
    // 15 * 60 * 1000 calculates the expiration period in milliseconds(15 minutes).
    const expirationTime = new Date(
      emailVerification.createdAt.getTime() + 15 * 60 * 1000
    );
    if (currentTime > expirationTime) {
      // OTP expired, send new OTP
      await sendEmailVerificationOTP(req, existingUser);
      return res.status(400).json({
        status: "failed",
        message: "OTP expired, new OTP sent to your email",
      });
    }
    // OTP is valid and not expired, mark email as verified
    Userexisting.isVerified = true;
    await Userexisting.save();

    // Delete email verification document
    await otpModel.deleteMany({ userId: Userexisting._id });
    return res
      .status(200)
      .json({ status: true, message: "Email verified successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      status: false,
      message: "Unable to verify email, please try again later",
    });
  }
};

// @desc    User Login
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({
        status: false,
        message: "All filed is required",
      });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({
        status: false,
        message: "user not found",
      });
    }
    // Check if user verified
    if (!user.isVerified) {
      return res
        .status(401)
        .json({ status: false, message: "Your account is not verified" });
    }
    const ismatch = comparePassword(password, user.password);
    if (!ismatch) {
      return res.status(400).json({
        status: false,
        message: "invalid password",
      });
    }
    const token = jwt.sign(
      {
        _id: user._id,
        name: user.name,
        email: user.email,
      },
      process.env.JWT_SECRECT_KEY,
      { expiresIn: "2h" }
    );

    return res.status(200).json({
      status: true,
      message: "user login successfully",
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
      },
      token: token,
    });
  } catch (error) {
    console.error("Login Error:", error);
    res.status(500).json({ message: "Server error" });
  }
};

exports.resendOtp = async (req, res) => {
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
          message: "Email does not exist",
        });
      }

      if (user.is_verify) {
        return res.status(400).json({
          status: false,
          message: "Email is already verified",
        });
      }

      // Generate and send new OTP
      await sendEmailVerificationOTP(req, user);

      return res.status(200).json({
        status: true,
        message: "New OTP sent to your email",
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        status: false,
        message: "Unable to send OTP, please try again later",
      });
    }
  }

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