const jwt = require("jsonwebtoken");
const { secretKey } = require("../configuration/jwtConfig");
require("dotenv").config();

function generateToken(user) {
  const payload = {
    id: user._id,
    email: user.email,
    role: user.role,
  };
  return jwt.sign(payload, process.env.ACCESS_TOKEN_SECERT, {
    expiresIn: "1h",
  });
}

module.exports = {
  generateToken,
};
