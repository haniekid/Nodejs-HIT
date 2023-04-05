const express = require("express");
const router = express.Router();

const courseRoutes = require("./course.route");

const publicRoutes = [
  {
    path: "/courses",
    route: courseRoutes,
  },
  // {
  //   path: "/about",
  //   route: aboutRoutes,
  // },
  // {
  //   path: "/blog",
  //   route: blogRoutes,
  // },
  // {
  //   path: "/designveloper",
  //   route: designveloperRoutes,
  // },
];

publicRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

module.exports = router;
