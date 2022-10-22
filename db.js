const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:27017/test")
  .then(() => {
    console.log("mongodb is connected");
  })
  .catch((e) => {
    console.log("mongodb isnot connected");
  });
