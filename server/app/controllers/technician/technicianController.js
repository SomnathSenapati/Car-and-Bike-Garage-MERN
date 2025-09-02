exports.dashboard = (req, res) => {
  res.render('technician/dashboard', { title: 'Technician Dashboard' });
};

exports.authPage = (req, res) => {
  res.render("technician/auth", { title: "Technician Auth Page" });
};
exports.CheckAuth = async (req, res, next) => {
  try {
    console.log(req.user)
    if (req.user) {
      next();
    } else {
      res.redirect("/");
    }
  } catch (err) {
    console.log(err);
  }
};