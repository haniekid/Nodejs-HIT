const express = require('express');
const courseRouter  = express.Router();

const courseController = require('../app/controllers/CourseController');

courseRouter.post('/store', courseController.store);
courseRouter.get('/create', courseController.create);
courseRouter.get('/:id/edit', courseController.edit);
courseRouter.patch('/:id/restore', courseController.restore);
courseRouter.post('/handle-action-form', courseController.handleActionForm);
courseRouter.put('/:id', courseController.update);
courseRouter.delete('/:id', courseController.destroy);
courseRouter.delete('/:id/force', courseController.forceDestroy);
courseRouter.get('/:slug', courseController.show);
courseRouter.get('/', courseController.index);

module.exports = courseRouter;
