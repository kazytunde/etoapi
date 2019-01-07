const express = require("express");
const Joi = require("joi");
const { trackables, products, cart } = require("../data");
const router = express.Router();

router.get("/", (req, res) => {
  res.send(products);
});

router.get("/:productId", (req, res) => {
  const productId = req.params.productId;
  const product = products.find(product => product.id === parseInt(productId));
  if (!product) {
    return res
      .status(404)
      .send(`The product with the ID : ${productId} was not found`);
  }
  res.send(product);
});

router.post("/", (req, res) => {
  const { error } = validateProduct(req.body);
  if (error) {
    return res.status(400).send(error.details[0].message);
  }
  const product = {
    id: products.length + 1,
    name: req.body.name,
    amount: req.body.amount
  };
  products.push(product);
  res.send(product);
});

router.put("/:id", (req, res) => {
  const product = products.find(
    product => product.id === parseInt(req.params.id)
  );

  if (!product) {
    return res
      .status(404)
      .send(`The product with the ID : ${req.params.id} was not found`);
  }

  const { error } = validateProduct(req.body);
  if (error) {
    return res.status(400).send(error.details[0].message);
  }

  const index = products.indexOf(product);

  products[index].name = req.body.name;
  products[index].amount = req.body.amount;

  res.send(product);
});

router.delete("/:id", (req, res) => {
  const product = products.find(
    product => product.id === parseInt(req.params.id)
  );

  if (!product) {
    return res
      .status(404)
      .send(`The product with the ID : ${req.params.id} was not found`);
  }

  //find index of the product
  const index = products.indexOf(product);
  //remove  1 product at the index specified
  products.splice(index, 1);

  res.send(product);
});

const validateProduct = product => {
  const Schema = {
    name: Joi.string()
      .min(3)
      .max(100)
      .required(),
    amount: Joi.number()
      .min(1)
      .max(10000)
      .required()
  };

  return Joi.validate(product, Schema);
};

module.exports = router;
