const express = require("express");
const mechanicController = require("../../controllers/admin/MechanicController");
const router = express.Router();

router.get("/list", mechanicController.mechanicList);
router.get("/add", (req, res) => {
  try {
    res.render("mechanics/add", {
      title: "mechanic Add",
    });
  } catch (error) {
    res.redirect("/mechanic/add");
  }
});
router.post('/add',mechanicController.createmechanic)
router.get("/edit/:id", mechanicController.edit);
router.post('/update/:id',mechanicController.update)
router.get('/delete/:id',mechanicController.delete)

module.exports = router;
