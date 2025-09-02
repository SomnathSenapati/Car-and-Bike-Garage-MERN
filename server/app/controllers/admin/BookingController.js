// const ErrorCode = require("../../helper/httpsServerCode");
const booking = require("../../models/Booking");
const fs = require("fs").promises;
const fsSync = require("fs");
const path = require("path");
const Customer = require("../../models/User");
const Vehicle = require("../../models/Vehicle");
const Service = require("../../models/Service");
const Mechanic = require("../../models/Mechanic");

class bookingController {
  async createbooking(req, res) {
    console.log(req.body);
    // console.log(req.file);

    try {
      //console.log(req.body);
      const { title, content } = req.body;

      const sdata = new booking({
        title,
        content,
      });
      const data = await sdata.save();
      if (data) {
        res.redirect("/booking/list");
      } else {
        res.redirect("/add");
      }
    } catch (error) {
      console.log(error);
    }
  }

  async bookingList(req, res) {
    try {
      const data = await booking
        .find()
        // .populate("customer", "name")
        // .populate("vehicle", "model")
        // .populate("service", "name")
        .populate("mechanic", "name");
      // .lean();

      const customers = await Customer.find();
      const vehicles = await Vehicle.find();
      const services = await Service.find();
      const mechanics = await Mechanic.find();

      res.render("booking/list", {
        title: "Booking List",
        data: data,
        customers,
        vehicles,
        services,
        mechanics,
        message: null,
      });
    } catch (error) {
      res.render("booking/list", {
        title: "Booking List",
        data: [],
        message: error.message,
      });
    }
  }

  async edit(req, res) {
    try {
      const id = req.params.id;
      const editdata = await booking.findById(id);
      res.render("booking/edit", {
        title: "edit page",
        data: editdata,
      });
    } catch (error) {
      console.log(error);
    }
  }

  async update(req, res) {
    try {
      const id = req.params.id;

      // Fetch the existing booking document
      const existingbooking = await booking.findById(id);
      if (!existingbooking) {
        return res.status(404).json({
          status: false,
          message: "booking not found",
        });
      }

      let updateData = { ...req.body };

      // If a new image is uploaded
      if (req.file) {
        // Delete the old image file if it exists
        if (existingbooking.image) {
          const oldImagePath = path.join(
            __dirname,
            "..",
            "..",
            "..",
            existingbooking.image
          );
          fs.unlink(oldImagePath, (err) => {
            if (err) {
              console.error("Error deleting old image:", err);
            } else {
              console.log("Old image deleted successfully.");
            }
          });
        }

        // Update the image path in the update data
        updateData.image = req.file.path;
        console.log("New image uploaded and path added:", req.file.path);
      }

      // Update the booking document
      const updatedbooking = await booking.findByIdAndUpdate(id, updateData, {
        new: true,
      });

      if (!updatedbooking) {
        return res.status(404).json({
          status: false,
          message: "booking not found",
        });
      }

      res.redirect("/booking/list");
    } catch (error) {
      console.error("Update error:", error);
      return res.status(500).json({
        status: false,
        message: error.message,
      });
    }
  }

  async delete(req, res) {
    try {
      const id = req.params.id;

      const deletedData = await booking.findByIdAndDelete(id);

      if (!deletedData) {
        return res.status(404).json({
          status: false,
          message: "booking not found",
        });
      }

      res.redirect("/booking/list");
    } catch (error) {
      console.error("Error deleting booking:", error);
      res.status(500).json({
        status: false,
        message: "Internal server error",
      });
    }
  }

  async assignMechanic(req, res) {
    try {
      const { mechanicId } = req.body;

      const bookingdata = await booking.findById(req.params.id);

      if (!bookingdata) {
        return res.status(404).json({ message: "Booking not found" });
      }

      bookingdata.mechanic = mechanicId;
      bookingdata.status = "Booked";

      await bookingdata.save();

      res.json({ message: "Mechanic assigned successfully", booking });
    } catch (error) {
      console.error("Error assigning mechanic:", error);
      res.status(500).json({ message: "Error assigning mechanic", error });
    }
  }
  // Reject a booking
  async rejectBooking(req, res) {
    try {
      const bookingId = req.params.id;

      await booking.findByIdAndUpdate(bookingId, { status: "Rejected" });

      // req.flash("success", "Booking rejected successfully!");
      res.redirect("/booking/list");
    } catch (error) {
      console.error("Error rejecting booking:", error);
      req.flash("error", "Something went wrong while rejecting the booking");
      res.redirect("/booking/list");
    }
  }
}

module.exports = new bookingController();
