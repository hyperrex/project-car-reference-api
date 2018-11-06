const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/projects_controller');

router.get('/', ctrl.getAllProjects);
router.get('/:id', ctrl.getProjectById);
// router.get('users/:users_id', ctrl.getProjectsByUser);
router.post('/', ctrl.createProject);
router.put('/:id', ctrl.updateProject);
router.delete('/:id', ctrl.deleteProject);

module.exports = router;