const express = require('express');
const router = express.Router();
const projectsCtrl = require('../../controllers/api/projects');
const ensureLoggedIn = require('../../config/ensureLoggedIn');


// All paths start with '/api/projects'
router.post('/', ensureLoggedIn, projectsCtrl.create);

// POST /api/projects (create a user - sign up)


module.exports = router;