const data = require("../data/dataProducts");
const Product = require("./../models/product.model");
const getProducts = (req, res) => {
  // const products = require("../data/dataProducts");

  // res.render("products", {
  //   products,
  //   title: "SẢN PHẨM",
  // });
  console.log(req.query);
  let products = data;
  if (req.query.price) {
    products = products.filter((item) => item.price == req.query.price);
  }

  res.json(products);

  // res.render("products", {
  //   title: "My Product",
  //   check: false,
  //   products: products,
  // });
};

const getProductbyId = (req, res) => {
  let products = data;
  // console.log(req.params.productId);
  products = products.filter((product) => product.id == req.params.productId);
  res.json(products);
  // res.render("products", {
  //   title: "My Product",
  //   check: false,
  //   products: products,
  // });
};

const createProducts = (req, res) => {
  res.render("add-product", {
    title: "Thêm sản phẩm",
  });
};

const postProducts = (req, res) => {
  const product = req.body;
  res.json(product);
  // console.log(product);
};

const updateProductById = (req, res) => {};

const deleteProductById = (req, res) => {};

// ?key=value
module.exports = {
  getProducts,
  createProducts,
  postProducts,
  getProductbyId,
  updateProductById,
  deleteProductById,
};

// Difference between req.query[] and req.params
