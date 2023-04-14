const data = require("../data/dataProducts");
const Product = require(".././models/product.model");

// [GET] / /products

// ?key=value
const getProducts = (req, res, next) => {
  // let products = data;
  // if (req.query.price) {
  //   products = products.filter((item) => item.price >= req.query.price);
  // }
  // res.json(products);
  let products = Product.find();
  res.json(products);
};

// [GET] / /products/id
const getProductbyId = (req, res) => {
  // let products = data;
  // products = products.filter((product) => product.id == req.params.productId);
  // if (products) {
  //   res.json(products);
  //   return;
  // }
  // res.status(404).json({
  //   message: "NOT FOUND!!!",
  // });
  let products = Product.findById(req.params.id);
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
  // let products = data;
  // const productUpdate = req.body;
  // products.push(productUpdate);
  // res.json({
  //   products,
  // });
  const product = new Product(req.body);
  product.save();
  res.json({
    msg: "Create successfully",
  });
};

// [PUT] / /products/:id
const updateProductById = (req, res) => {
  // let products = data;
  // const { productId } = req.params;
  // const newProduct = req.body;
  // products = products.map((item) => {
  //   if (item.id == productId) {
  //     return newProduct;
  //   }
  //   return item;
  // });
  // res.json({
  //   newProducts: products,
  // });
  const newProduct = req.body;
  const { productId } = req.params;
  let products = Product.updateById(productId, newProduct);
  res.json({
    newProducts: products,
  });
};

// [DELETE]  / /products/:productId
const deleteProductById = (req, res) => {
  // let products = data;
  // products = products.filter((product) => product.id != req.params.productId);
  // res.json(products);
  const product = new Product(req.body);
  Product.deleteById(req.params.id);
};

module.exports = {
  getProducts,
  createProducts,
  getProductbyId,
  updateProductById,
  deleteProductById,
};

// Difference between req.query[] and req.params
