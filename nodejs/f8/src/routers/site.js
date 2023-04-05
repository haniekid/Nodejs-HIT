const express = require('express')
const siteRouter = express.Router()

const siteController = require('../app/controllers/SiteController')
siteRouter.get('/search', siteController.search)
siteRouter.get('/', siteController.index)
siteRouter.get('/test', siteController.test)
module.exports = siteRouter
