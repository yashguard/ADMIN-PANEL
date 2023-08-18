const model = require("../models/admin.user.schema");

const adminHome = (req, res) => {
  res.render("index");
};

const adminLogin = (req, res) => {
  res.render("login");
};

const adminRegister = (req, res) => {
  res.render("register");
};

const adminUsers = (req, res) => {
  model.create(req.body);
  let user = model.findOne({ username: req.body.username });
  if (user) res.status(404).render("login");

  res.status(201).send("User added successfully");
};

module.exports = { adminHome, adminLogin, adminRegister, adminUsers };
