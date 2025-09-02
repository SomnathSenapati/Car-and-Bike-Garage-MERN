// const ErrorCode = require("../../helper/httpsServerCode");
const mechanic = require("../../models/Mechanic");
const fs = require("fs").promises;
const fsSync = require("fs");
const path = require("path");
class MechanicController {
  async createmechanic(req, res) {
    console.log(req.body);
    // console.log(req.file);

    try {
      //console.log(req.body);
      const {
        name,
        phone,
        email,
        password,
        skillset, // Example: ["Oil Change", "Dent Repair"]
        experience,
        address,
      } = req.body;

      const sdata = new mechanic({
        name,
        phone,
        email,
        password,
        skillset, // Example: ["Oil Change", "Dent Repair"]
        experience,
        address,
      });
      const data = await sdata.save();
      if (data) {
        res.redirect("/mechanics/list");
      } else {
        res.redirect("/add");
      }
    } catch (error) {
      console.log(error);
    }
  }

  async mechanicList(req, res) {
    try {
      const data = await mechanic.find();

      res.render("mechanics/list", {
        title: "Mechanic List",
        data: data,
      });
    } catch (error) {
      res.redirect("/mechanics/list", { message: error.message });
    }
  }

  async edit(req, res) {
    try {
      const id = req.params.id;
      const editdata = await mechanic.findById(id);
      res.render("mechanics/edit", {
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

      // Fetch the existing mechanic document
      const existingmechanic = await mechanic.findById(id);
      if (!existingmechanic) {
        return res.status(404).json({
          status: false,
          message: "mechanic not found",
        });
      }

      let updateData = { ...req.body };

      // If a new image is uploaded
      if (req.file) {
        // Delete the old image file if it exists
        if (existingmechanic.image) {
          const oldImagePath = path.join(
            __dirname,
            "..",
            "..",
            "..",
            existingmechanic.image
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

      // Update the mechanic document
      const updatedmechanic = await mechanic.findByIdAndUpdate(id, updateData, {
        new: true,
      });

      if (!updatedmechanic) {
        return res.status(404).json({
          status: false,
          message: "mechanic not found",
        });
      }

      res.redirect("/mechanics/list");
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

      const deletedData = await mechanic.findByIdAndDelete(id);

      if (!deletedData) {
        return res.status(404).json({
          status: false,
          message: "mechanic not found",
        });
      }

      res.redirect("/mechanics/list");
    } catch (error) {
      console.error("Error deleting mechanic:", error);
      res.status(500).json({
        status: false,
        message: "Internal server error",
      });
    }
  }
}
module.exports = new MechanicController();
