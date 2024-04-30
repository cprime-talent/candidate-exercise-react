const mongoose = require("../configuration/dbConfig");

const userSchema = mongoose.Schema({
  fname: {
    type: String,
    require: true,
  },
  lname: {
    type: String,
    require: true,
  },
  place: {
    type: String,
    require: true,
  },
  phoneNo: {
    type: String,
    require: true,
  },
});

module.exports = mongoose.model("UserModel", userSchema);
