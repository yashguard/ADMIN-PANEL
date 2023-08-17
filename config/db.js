const mongoose = require("mongoose");
require("dotenv").config();
let db = process.env.DB;

const connect = async () => {
  await mongoose
    .connect(db)
    .then(() => {
      console.log("Connect completed successfully");
    })
    .catch(() => {
      console.log("Failed to connect");
    });
};

module.exports = connect;
