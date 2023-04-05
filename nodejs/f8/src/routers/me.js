const express = require('express')
const meRouter = express.Router()

const meController = require('../app/controllers/MeController')

meRouter.get('/stored/courses', meController.storedCourses)
meRouter.get('/trash/courses', meController.trashCourses)

module.exports = meRouter
