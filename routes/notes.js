//Our router module
const router = require('express').Router();

//Our controller
const NotesController = require('../controllers/notesController');

//our routes



router.get(`/`, NotesController.index);
router.get(`/:id`, NotesController.show);
router.get(`/:id/edit`, NotesController.edit);
router.post(`/`, NotesController.create);
router.post(`/update`, NotesController.update);
router.post(`/destroy`, NotesController.destroy);

module.exports = router;