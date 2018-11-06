const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/users_controller');

router.get('/', ctrl.getAllUsers);
router.get('/:id', ctrl.getUserById);
router.get('/projects/:id', ctrl.getUserProjects);
router.post('/', ctrl.createUser);
router.put('/:id', ctrl.updateUser);
router.delete('/:id', ctrl.deleteUser);
router.post('/login', ctrl.tryLogin);

module.exports = router;