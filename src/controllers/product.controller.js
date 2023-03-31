const viewProducts = async (req, res) => {
  const products = require("../data/dataProducts");

  res.render("products", {
    products,
    title: "SẢN PHẨM",
  });
};

const addProducts = (req, res) => {
  res.render("add-product", {
    title: "Thêm sản phẩm",
  });
};

module.exports = {
  viewProducts,
  addProducts,
};
