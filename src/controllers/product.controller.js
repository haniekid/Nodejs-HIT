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
  res.json(products);
  console.log(products);
};

// [GET] / /products/id
const getProductbyId = (req, res) => {
  let products = data;
  products = products.filter((product) => product.id == req.params.productId);
  res.json(products);
};

// [POST] / /products/post
const postProducts = (req, res) => {
  const product = req.body;
  res.json(product);
};

// [GET] / /products/updateId/:id
const updateProductById = (req, res) => {
  // update abcxyz
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
  postProducts,
  getProductbyId,
  updateProductById,
  deleteProductById,
};

// Difference between req.query[] and req.params
