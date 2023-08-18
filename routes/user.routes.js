const { Router } = require("express");
const passport = require("passport");
const {
  adminHome,
  adminLogin,
  adminRegister,
  adminUsers,
} = require("../controllers/user.controller");
let routes = Router();

routes.get("/", adminHome);
routes.get("/login", adminLogin);
routes.get("/register", adminRegister);
routes.post("/user", adminUsers);
routes.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/",
  })
);

module.exports = routes;
