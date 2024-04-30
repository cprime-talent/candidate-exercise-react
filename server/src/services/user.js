const User = require("../models/user");

async function getUsers() {
  try {
    const users = await User.find({});
    return users;
  } catch (error) {
    console.error(error);
  }
}

module.exports = { getUsers };
