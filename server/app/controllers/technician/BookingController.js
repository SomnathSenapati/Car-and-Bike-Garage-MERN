const booking = require("../../models/Booking");
const fs = require("fs").promises;
const fsSync = require("fs");
const path = require("path");
const Customer = require("../../models/User");
const Vehicle = require("../../models/Vehicle");
const Service = require("../../models/Service");
const Mechanic = require("../../models/Mechanic");

class bookingController {
  async bookingList(req, res) {
      try {
        const data = await booking.find()
        // .populate("customer", "name")
        // .populate("vehicle", "model")
        // .populate("service", "name")
        .populate("mechanic", "name")
        // .lean();
  
        const customers = await Customer.find();
        const vehicles = await Vehicle.find();
        const services = await Service.find();
        const mechanics = await Mechanic.find();
  
        res.render("technician/booking/list", {
          title: "Booking List",
          data: data,
          customers,
          vehicles,
          services,
          mechanics,
          message: null,
        });
      } catch (error) {
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
