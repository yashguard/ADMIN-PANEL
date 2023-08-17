const express = require("express");
const routes = require("./routes/user.routes");
const server = express();
const cors = require("cors");
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
require("dotenv").config({ path: "./config/.env" });
let port = process.env.PORT;
server.use(routes);
server.use(cors());
server.set("view engine", "ejs");
server.set("views", __dirname + "/views");
server.use(express.static(__dirname + "/public"));

server.listen(port, () => {
  console.log("Server listening on port " + port);
});
