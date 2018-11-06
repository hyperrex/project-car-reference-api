const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/photos_controller');

router.get('/', ctrl.getAllPhotos);
router.get('/:id', ctrl.getPhotoById);
router.get('/projects/:projects_id', ctrl.getPhotosByProject);
router.post('/', ctrl.createPhoto);
router.put('/:id', ctrl.updatePhoto);
router.delete('/:id', ctrl.deletePhoto);

module.exports = router;