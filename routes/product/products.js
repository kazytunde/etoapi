const express = require("express");
const Joi = require("joi");
const { trackables, products, cart } = require("../data");
const router = express.Router();
const { Product, validate } = require("../models/product/product");

router.get("/", async (req, res) => {
  try {
    const products = await Product.find({}).exec();
    res.send(products);
  } catch (e) {
    console.log(e.message);
  }
});

router.get("/:productId", async (req, res) => {
  const productId = req.params.productId;
  const product = await Product.findById(productId).exec();
  if (!product) {
    return res
      .status(404)
      .send(`The product with the ID : ${productId} was not found`);
  }
  res.send(product);
});

router.post("/", async (req, res) => {
  const { body: request } = req;
  console.log("request", request);
  const { error } = validate(request);
  if (error) {
    return res.status(400).send(error.details[0].message);
  }
  const product = {
    name: request.name,
    amount: request.amount
  };
  const createdProduct = await Product.create(product);
  res.send(createdProduct);
});

router.put("/:id", async (req, res) => {
  const productId = parseInt(req.params.id);
  const { body: productToUpdate } = req;

  const { error } = validate(productToUpdate);
  if (error) {
    return res.status(400).send(error.details[0].message);
  }

  //{new : true} returns the new user that got updated not the old user
  const product = await Product.findByIdAndUpdate(productId, productToUpdate, {
    new: true
  }).exec();

  if (!product)
    return res
      .status(404)
      .send(`The product with the ID : ${productId} was not found`);

  res.send(product);
});

router.delete("/:id", async (req, res) => {
  const productId = parseInt(req.params.id);
  const product = await Product.findByIdAndRemove(productId).exec();
  if (!product)
    return res
      .status(404)
      .send(`The product with the ID : ${productId} was not found`);

  res.send(product);
});

module.exports = router;
