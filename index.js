const express = require("express");
const server = express();
const passport = require("passport");
const routes = require("./routes/user.routes");
const cors = require("cors");
const connect = require("./config/db");
const initializePassport = require("./middlewares/passport");
const expressSessions = require("express-session");
server.use(
  expressSessions({ secret: "secret", resave: false, saveUninitialized: false })
);
server.use(passport.initialize());
server.use(passport.session());
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(routes);
server.use(cors());
server.set("view engine", "ejs");
server.set("views", __dirname + "/views");
server.use(express.static(__dirname + "/public"));
initializePassport(passport);
require("dotenv").config();
let port = process.env.PORT;

server.listen(port, () => {
  console.log("Server listening on port " + port);
  connect();
});
