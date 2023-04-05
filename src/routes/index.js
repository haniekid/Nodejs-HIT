const express = require("express");
const router = express.Router();
const productRoutes = require("./product.route");

// router.use("/products", productRoutes);

const routes = [
  {
    path: "/products",
    route: productRoutes,
  },
];

routes.map((route) => {
  router.use(route.path, route.route);
});

module.exports = router;
