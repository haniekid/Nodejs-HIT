const data = require("../data/dataProducts");
const Product = require("./../models/product.model");

// [GET] / /products

// ?key=value
const getProducts = (req, res, next) => {
  Product.find({})
    .then((products) => res.render("products"))
    .catch((err) => next(err));
};

// [GET] / /products/id
const getProductbyId = (req, res) => {
  let products = data;
  products = products.filter((product) => product.id == req.params.productId);
  if (products) {
    res.json(products);
    return;
  }
  res.status(404).json({
    message: "NOT FOUND!!!",
  });
};

// [POST] / /products/create
const createProducts = (req, res) => {
  const product = req.body;
  res.json({
    product,
  });
};

// [GET] / /products/updateId/:id
const updateProductById = (req, res) => {
  // update

  // return products after updating
  getProductbyId(req, res);
};

// [GET]  / /products/deleteId/:productId
const deleteProductById = (req, res) => {
  let products = data;
  products = products.filter((product) => product.id != req.params.productId);
  res.json(products);
};

module.exports = {
  getProducts,
  createProducts,
  getProductbyId,
  updateProductById,
  deleteProductById,
};

// Difference between req.query[] and req.params
