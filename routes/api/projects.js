const express = require('express');
const router = express.Router();
const projectsCtrl = require('../../controllers/api/projects');
const ensureLoggedIn = require('../../config/ensureLoggedIn');


// All paths start with '/api/projects'

router.post('/', ensureLoggedIn, projectsCtrl.create);


router.get('/', ensureLoggedIn, projectsCtrl.index);

// GET /api/projects (get all projects)
router.get('/user/:userId', projectsCtrl.getAllProjects);

// GET /api/projects/:id (get a single project)
router.get('/:id', projectsCtrl.getAProject);

module.exports = router;