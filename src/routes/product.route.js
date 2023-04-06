const express = require("express");
const router = express.Router();

const productController = require("../controllers/product.controller");

router.get("/", productController.getProducts);
router.get("/:productId", productController.getProductbyId);
router.get("/create", productController.createProducts);
router.put("/updateId/:productId", productController.updateProductById);
router.delete("/deleteId/:productId", productController.deleteProductById);

module.exports = router;
