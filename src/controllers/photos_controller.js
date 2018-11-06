const model = require('../models/photos_model');

// getAllPhotos
const getAllPhotos = async (req, res, next) => {
  try {
    const photos = await model.getAllPhotos();
    return res.status(200).json(photos);
  } catch (error) {
    console.log(error);
  }
};

// getPhotoById
const getPhotoById = async (req, res, next) => {
  try {
    const photoById = await model.getPhotoById(req.params.id);
    return res.status(200).json(photoById);
  } catch (error) {
    console.log(error);
  }
};

// getPhotoByProject
const getPhotosByProject = async (req, res, next) => {
  try {
    console.log(req.params);
    const photosByProject = await model.getPhotosByProject(req.params.projects_id);
    return res.status(200).json(photosByProject);
  } catch (error) {
    console.log(error);
  }
};

// createPhoto >> req.body
const createPhoto = async (req, res, next) => {
  try {
    const photo = await model.createPhoto(req.body);
    return res.status(201).json(photo);
  } catch (error) {
    console.log(error);
  }
};

// updatePhoto >> req.params.id, req.body
const updatePhoto = async (req, res, next) => {
  try {
    const photo = await model.updatePhoto(req.params.id, req.body);
    return res.status(201).json(photo);
  } catch (error) {
    console.log(error);
  }
};

// deletePhoto
const deletePhoto = async (req, res, next) => {
  try {
    const photo = await model.deletePhoto(req.params.id);
    return res.status(201).json(photo);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getAllPhotos,
  getPhotoById,
  getPhotosByProject,
  createPhoto,
  updatePhoto,
  deletePhoto
};
