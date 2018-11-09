const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/user_project_controller');

router.get('/', ctrl.getAllUserProjects);
router.get('/:id', ctrl.getUserProjectById);
router.post('/', ctrl.createUserProject);
router.put('/:id', ctrl.updateUserProject);
router.delete('/:id', ctrl.deleteUserProject);

module.exports = router;