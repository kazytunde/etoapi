const mongoose = require("..startup/db");

const productSchema = mongoose.Schema({
  name: String,
  amount: Number,
  date: { type: Date, default: Date.now() }
});

const Product = mongoose.model("Product", productSchema);
