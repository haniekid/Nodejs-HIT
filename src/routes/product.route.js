const express = require("express");
const router = express.Router();

const productController = require("../controllers/product.controller");

router.get("/", productController.viewProducts);
router.get("/add", productController.addProducts);

module.exports = router;
