const express = require("express");
const userController = require("../../controllers/admin/UserController");
const router = express.Router();

router.get("/list", userController.userList);
router.get("/add", (req, res) => {
  try {
    res.render("user/add", {
      title: "user Add",
    });
  } catch (error) {
    res.redirect("/user/add");
  }
});
router.post('/add',userController.createuser)
router.get('/edit/:id',userController.edit)
router.post('/update/:id',userController.update)
router.get('/delete/:id',userController.delete)

module.exports = router;
