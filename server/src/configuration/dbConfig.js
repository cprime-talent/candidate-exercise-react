const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/jwt_db");

mongoose.connection.on("connected", () => {
  console.log("connected to mongodb");
});

mongoose.connection.on("error", (err) => {
  console.log(`MongoDB connection error: ${err}`);
});

module.exports = mongoose;
