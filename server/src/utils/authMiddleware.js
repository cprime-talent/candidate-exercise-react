const jwt = require("jsonwebtoken");
const secretKey = require("../configuration/jwtConfig");
require("dotenv").config();

function authenticateToken(req, res, next) {
  const authHeader = req.header("Authorization");
  if (!authHeader) {
    return res.status(401).json({ message: "Unauthorization: Missing Token!" });
  }
  const [bearer, token] = authHeader.split(" ");
  if (bearer !== "Bearer" || !token) {
    return res
      .status(401)
      .json({ message: "Unauthorization: Invalid token format" });
  }

  jwt.verify(token, process.env.ACCESS_TOKEN_SECERT, (err, user) => {
    if (err) {
      console.log("token", token);
      console.log("secretKey", process.env.ACCESS_TOKEN_SECERT);
      return res.status(403).json({ message: err });
    }
    req.user = user;
    next();
  });
}

module.exports = { authenticateToken };
