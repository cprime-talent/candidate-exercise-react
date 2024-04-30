const express = require("express");
const SignupRoute = require("./routes/signup");
const createAdminAccount = require("./scripts/admin");
const bodyParser = require("body-parser");
const loginRoute = require("./routes/login");
const userRoute = require("./routes/user");
const router = require("./routes/userModelRoute");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(cors());
createAdminAccount();

app.use("/user", SignupRoute);
app.use("/auth", loginRoute);
app.use("/api", userRoute);
app.use("/api", router);

app.listen(PORT, () => {
  console.log(`server is running on : http://localhost:${PORT}`);
});
