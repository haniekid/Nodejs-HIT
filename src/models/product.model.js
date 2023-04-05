// Defining a Model
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Kiểu dữ liệu Decimal128 được hỗ trợ từ phiên bản MongoDB 3.4 trở lên, và từ phiên bản Mongoose 4.5 trở lên.
const Decimal128 = Schema.Types.Decimal128;

const Product = new Schema({
  id: Number,
  title: { type: String, default: "hahaha", required: true },
  price: { type: Decimal128 },
  description: { type: String, required: true },
  image: { type: String },
  rate: { type: Decimal128 },
});

module.exports = mongoose.model("Product", Product); // 'ModelName', mySchema
