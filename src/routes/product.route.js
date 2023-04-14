const express = require("express");
const router = express.Router();

const productController = require("../controllers/product.controller");

router.get("/", productController.getProducts);
router.get("/:productId", productController.getProductbyId);
router.post("/create", productController.createProducts);
router.put("/:productId", productController.updateProductById);
router.delete("/:productId", productController.deleteProductById);

module.exports = router;
