const mongoose = require("mongoose");

const oneSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  price: Number,
  address: String,
});

module.exports = mongoose.model("One", oneSchema);
