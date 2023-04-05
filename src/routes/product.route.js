const express = require("express");
const router = express.Router();

const productController = require("../controllers/product.controller");

router.get("/", productController.getProducts);
router.get("/:productId", productController.getProductbyId);
router.get("/create", productController.createProducts);
router.post("/post", productController.postProducts);
router.get("/updateId/:productId", productController.updateProductById);
router.get("/deleteId/:productId", productController.deleteProductById);

module.exports = router;

// [NodeJS - BTVN buổi 4]
// Viết 5 API: Tạo ra 1 file product.route.js để chứa các router và file product.controller.js để xử lý
// getProducts: trả về tất cả products (có thể filter các products theo price (lớn hơn, nhỏ hơn, bằng))
// createProduct: trả về tất cả các sản phẩm (trong đó có sản phẩm đã tạo)
// getProductById: trả về sản phẩm theo id
// updateProductById: trả về tất cả các sản phẩm (sản phẩm theo id đã được update)
// deleteProductById: trả về tất cả các sản phẩm (trừ sản phẩm theo id)
// Chú ý:
// Dữ liệu từ file data.js buổi trước
// Dữ liệu trả về phải là JSON
// Code buổi trước: https://github.com/ChristianGreyy/HIT_NodeJS
// Deadline: 22h thứ 6 ngày 07/04
