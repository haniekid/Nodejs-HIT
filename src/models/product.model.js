// // Defining a Model
// const mongoose = require("mongoose");
// const Schema = mongoose.Schema;

// // Kiểu dữ liệu Decimal128 được hỗ trợ từ phiên bản MongoDB 3.4 trở lên, và từ phiên bản Mongoose 4.5 trở lên.
// const Decimal128 = Schema.Types.Decimal128;

// const Product = new Schema({
//   id: Number,
//   title: { type: String, default: "hahaha", required: true },
//   price: { type: Decimal128 },
//   description: { type: String, required: true },
//   image: { type: String },
//   rate: { type: Decimal128 },
// });

// module.exports = mongoose.model("Product", Product); // 'ModelName', mySchema

const fs = require("fs");
const path = require("path");
class Product {
  constructor({ id, title, price, description, image, rate }) {
    this.id = id;
    this.title = title;
    this.price = price;
    this.description = description;
    this.image = image;
    this.rate = rate;
  }

  save() {
    const newProduct = this;
    // console.log(newProduct);
    const products = Product.find();
    // convert instance class to object
    products.push({ ...newProduct });
    const productsJSON = JSON.stringify(products);
    console.log(productsJSON);
    // write file
    fs.writeFileSync(
      path.join(__dirname, "../data/product.json"),
      productsJSON
    );
  }

  static find() {
    try {
      const productsJSON = fs.readFileSync(
        path.join(__dirname, "../data/product.json"),
        "utf8"
      );
      const products = JSON.parse(productsJSON);
      return products;
    } catch (err) {
      console.log(err);
    }
  }

  static findById(id) {
    let products = Product.find();
    products = products.filter((product) => product.id == id);
    return products;
  }

  static deleteById(id) {
    let products = Product.findById();
    products = products.filter((product) => product.id != id);
    products.save();
  }

  static updateById(id, newProduct) {
    let products = Product.findById();
    products = products.map((product) => {
      if (product.id == id) {
        return newProduct;
      }
      return product;
    });
    products.save();
  }
}

module.exports = Product;

// encoding
