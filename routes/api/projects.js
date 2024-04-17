const express = require('express');
const router = express.Router();
const projectsCtrl = require('../../controllers/api/projects');
const ensureLoggedIn = require('../../config/ensureLoggedIn');


// All paths start with '/api/projects'

router.post('/', ensureLoggedIn, (req, res, next) => {
    console.log(req.body);
    next();
    
}, projectsCtrl.create);

// POST /api/projects (create a user - sign up)
router.get('/', ensureLoggedIn, projectsCtrl.index);

// GET /api/projects (get all projects)
router.get('/user/:userId', projectsCtrl.getAllProjects);


module.exports = router;