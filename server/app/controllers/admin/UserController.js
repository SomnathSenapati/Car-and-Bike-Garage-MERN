// const ErrorCode = require("../../helper/httpsServerCode");
const user = require("../../models/User");
const fs = require("fs").promises;
const fsSync = require("fs");
const path = require("path");
const { hashedPassword } = require("../../middleware/auth");
class UserController {
  async createuser(req, res) {
    console.log(req.body);
    // console.log(req.file);

    try {
      //console.log(req.body);
      const { name,
    phone,
    email,
    role,
    address,
    password,
    isVerified} = req.body;
    const existemail=await user.findOne({email})
    if(existemail){
      return res.redirect('/user/add')
    }
const hash=hashedPassword(password)
      const sdata = new user({
     name,
    phone,
    email,
    role,
    address,
    password:hash,
    isVerified
      });
      const data = await sdata.save();
      if (data) {
        res.redirect("/user/list");
      } else {
        res.redirect("/user/add");
      }
    } catch (error) {
      console.log(error);
    }
  }

  async userList(req, res) {
    try {
      const data = await user.find();

      res.render("user/list", {
        title: "user List",
        data: data,
      });
    } catch (error) {
      res.redirect("/user/list", { message: error.message });
    }
  }

  async edit(req, res) {
    try {
      const id = req.params.id;
      const editdata = await user.findById(id);
      res.render("user/edit", {
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

      // Fetch the existing user document
      const existinguser = await user.findById(id);
      if (!existinguser) {
        return res.status(404).json({
          status: false,
          message: "user not found",
        });
      }

      let updateData = { ...req.body };

      // If a new image is uploaded
      if (req.file) {
        // Delete the old image file if it exists
        if (existinguser.image) {
          const oldImagePath = path.join(
            __dirname,
            "..",
            "..",
            "..",
            existinguser.image
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

      // Update the user document
      const updateduser = await user.findByIdAndUpdate(id, updateData, {
        new: true,
      });

      if (!updateduser) {
        return res.status(404).json({
          status: false,
          message: "user not found",
        });
      }

      res.redirect("/user/list");
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

      const deletedData = await user.findByIdAndDelete(id);

      if (!deletedData) {
        return res.status(404).json({
          status: false,
          message: "user not found",
        });
      }

      res.redirect("/user/list");
    } catch (error) {
      console.error("Error deleting user:", error);
      res.status(500).json({
        status: false,
        message: "Internal server error",
      });
    }
  }
}
module.exports = new UserController();
