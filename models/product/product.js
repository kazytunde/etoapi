const Joi = require("joi");
// To validate mongodb ObjectId coming from the request
Joi.objectId = require("joi-objectid")(Joi);
const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      minlength: 5,
      maxlength: 50,
      trim: true
    },
    amount: {
      type: Number,
      required: true,
      min: 1,
      max: 10000
    }
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", productSchema);

const validate = product => {
  const Schema = {
    name: Joi.string()
      .min(5)
      .max(255)
      .required(),
    amount: Joi.number()
      .min(1)
      .max(10000)
      .required()
  };

  return Joi.validate(product, Schema);
};

module.exports = { Product, validate };
