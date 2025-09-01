exports.dashboard = (req, res) => {
  res.render('dashboard', { title: 'Admin Dashboard' });
};
exports.authPage = (req, res) => {
  res.render("auth", { title: "Admin Auth Page" });
};

