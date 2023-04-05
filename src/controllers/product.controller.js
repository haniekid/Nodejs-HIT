const data = require("../data/dataProducts");
const Product = require("./../models/product.model");

// [GET] / /products

// ?key=value
const getProducts = (req, res) => {
  let products = data;
  if (req.query.price) {
    products = products.filter((item) => item.price == req.query.price);
  }
  res.json(products);
};

// [GET] / /products/id
const getProductbyId = (req, res) => {
  let products = data;
  products = products.filter((product) => product.id == req.params.productId);
  res.json(products);
};

// [GET] / /products/create
const createProducts = (req, res) => {
  res.render("add-product", {
    title: "Thêm sản phẩm",
  });
  console.log("ADDDDDDDDDDDDDDD");
};

// [POST] / /products/post
const postProducts = (req, res) => {
  const product = req.body;
  res.json(product);
};

// [PUT] / /products/update
const updateProductById = (req, res) => {};

// [DELETE] / /products/delete
const deleteProductById = (req, res) => {};

module.exports = {
  getProducts,
  createProducts,
  postProducts,
  getProductbyId,
  updateProductById,
  deleteProductById,
};

// Difference between req.query[] and req.params
