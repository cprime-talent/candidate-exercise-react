const mongoose = require("../configuration/dbConfig");

const userSchema = mongoose.Schema({
  name: String,
  email: String,
  password: String,
  role: {
    type: String,
    enum: ["admin", "customer"],
    default: "customer",
  },
});

module.exports = mongoose.model("User", userSchema);
