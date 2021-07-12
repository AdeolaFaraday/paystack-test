const mongoose = require("mongoose");

const PaymentSchema = new mongoose.Schema({
  name: String,
  amount: Number,
});

module.exports = mongoose.model("PaymentSchema", PaymentSchema);
