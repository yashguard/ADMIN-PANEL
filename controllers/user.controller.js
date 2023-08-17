const adminHome = (req, res) => {
  res.render("index");
};

const adminLogin = (req, res) => {
  res.render("login");
};

const adminRegister = (req, res) => {
  res.render("register");
};

module.exports = { adminHome, adminLogin, adminRegister };
