const data = require("../data/dataProducts");
// const Product = require("./../models/product.model");

// [GET] / /products

// ?key=value
const getProducts = (req, res, next) => {
  let products = data;
  if (req.query.price) {
    products = products.filter((item) => item.price >= req.query.price);
  }
  res.json(products);
};

// [GET] / /products/create
const createProducts = (req, res) => {
  let products = data;
  const productUpdate = req.body;
  products.push(productUpdate);
  res.json({
    products,
  });
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

// [PUT] / /products/updateId/:id
const updateProductById = (req, res) => {
  // update
  let products = data;
  const productUpdate = req.body;
  products.push(productUpdate);
  // return products after updating
  res.json({
    products,
  });
};

// [DELETE]  / /products/deleteId/:productId
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
