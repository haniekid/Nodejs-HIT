const express = require("express");
const router = express.Router();

const courseController = require("../controllers/course.controller");

router.get("/", courseController.viewCourses);
router.get("/create", courseController.viewCreateCourse);
router.post("/create", courseController.createCourse);

module.exports = router;
