const { Router } = require("express");
const { adminHome, adminLogin, adminRegister } = require("../controllers/user.controller");
let routes = Router();

routes.get("/", adminHome)
routes.get("/login", adminLogin)
routes.get("/register", adminRegister)

module.exports = routes