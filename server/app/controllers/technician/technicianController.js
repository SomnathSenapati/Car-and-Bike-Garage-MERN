exports.dashboard = (req, res) => {
  res.render('technician/dashboard', { title: 'Technician Dashboard' });
};

exports.authPage = (req, res) => {
  res.render("technician/auth", { title: "Technician Auth Page" });
};