const express = require('express');
const router = express.Router();
const notesCtrl = require('../../controllers/api/notes');
const ensureLoggedIn = require('../../config/ensureLoggedIn');


// All paths start with '/api/notes'
router.post('/', ensureLoggedIn, notesCtrl.create);

// POST /api/notes (create a user - sign up)
router.get('/users/:userId', notesCtrl.index);

router.get('/section/:section/question/:question/project/:project', notesCtrl.getQuestionNote);

router.get('/:id', notesCtrl.getNote);

router.delete('/:id', notesCtrl.deleteNote);

router.put('/update', notesCtrl.updateNote)

module.exports = router;