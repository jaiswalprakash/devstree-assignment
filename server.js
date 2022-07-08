const express = require("express");
const app = express();
require("./database");
const CONSTANT = require("./src/utils/constant");
app.use(require("body-parser").json());
const cors = require("cors");
app.use(cors());

//Routes to Controller

app.use("/users", require("./src/controller/user-controller"));
app.use("/auth", require("./src/controller/auth-controller"));

// routes ends

app.listen(CONSTANT.PORT, () => {
  console.log(`Started Server at ${CONSTANT.PORT}`);
});
