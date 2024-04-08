const express = require("express");
var cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());

require("dotenv").config();

const defaultController = require("./routes/route");
app.use(defaultController);

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`server on http://localhost:${port}/`);
});
