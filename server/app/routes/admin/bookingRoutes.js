const express = require("express");
const BookingController = require("../../controllers/admin/BookingController");
const router = express.Router();

router.get("/list", BookingController.bookingList);
router.get("/add", (req, res) => {
  try {
    res.render("user/add", {
      title: "user Add",
    });
  } catch (error) {
    res.redirect("/user/add");
  }
});
router.post('/add',BookingController.createbooking)
router.get('/edit/:id',BookingController.edit)
router.post('/update/:id',BookingController.update)
router.get('/delete/:id',BookingController.delete)
// router.get("/", getAllBookings);
module.exports = router;
