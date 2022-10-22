const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
require("./db");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const oneRouter = require("./router/one-router");
app.use("/", oneRouter);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`server is started at ${port}`);
});
