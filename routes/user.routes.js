const { Router } = require("express");
const { adminHome } = require("../controllers/user.controller");
let routes = Router();

routes.get("/", adminHome)

module.exports = routes