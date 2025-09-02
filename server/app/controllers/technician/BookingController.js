const booking = require("../../models/Booking");
const fs = require("fs").promises;
const fsSync = require("fs");
const path = require("path");
const Customer = require("../../models/User");
const Vehicle = require("../../models/Vehicle");
const Service = require("../../models/Service");
const Mechanic = require("../../models/Mechanic");
const jwt = require("jsonwebtoken");

class bookingController {
  async bookingList(req, res) {
    try {
      // console.log("abc",req.user)
      // ✅ Get token from cookie
      const token = req.cookies.usertoken;
      if (!token) {
        return res.redirect("/Technician/login");
      }

      // ✅ Verify token
      const decoded = jwt.verify(token, "helloworldwelcometowebskitters");

    
      const data = await booking
        .find({ mechanic: decoded._id })
        .populate("mechanic", "name");

      const customers = await Customer.find();
      const vehicles = await Vehicle.find();
      const services = await Service.find();
      const mechanics = await Mechanic.find();

      res.render("technician/booking/list", {
        title: "Booking List",
        data,
        customers,
        vehicles,
        services,
        mechanics,
        message: null,
        technician: decoded,
      });
    } catch (error) {
      console.error("Booking List Error:", error);
      res.render("technician/booking/list", {
        title: "Booking List",
        data: [],
        message: error.message,
      });
    }
  }

  // Start booking
  async startBooking(req, res) {
    try {
      await booking.findByIdAndUpdate(req.params.id, { status: "In Progress" });
      res.redirect("/technician/booking/list");
    } catch (error) {
      res.status(500).send(error.message);
    }
  }

  // Complete booking
  async completeBooking(req, res) {
    try {
      await booking.findByIdAndUpdate(req.params.id, { status: "Completed" });
      res.redirect("/technician/booking/list");
    } catch (error) {
      res.status(500).send(error.message);
    }
  }
}

module.exports = new bookingController();
