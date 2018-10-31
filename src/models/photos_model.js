const query = require('../queries/photos_queries');

const getAllPhotos = async () => {
  const photos = await query.getAllPhotos();
  return photos;
};

const getPhotoById = async id => {
  const photoById = await query.getPhotoById(id);
  return photoById;
};

const createPhoto = async Photo => {
  const newPhoto = await query.createPhoto(Photo);
  return newPhoto;
};

const updatePhoto = async (id, body) => {
  const updatedPhoto = await query.updatePhoto(id, body);
  return updatedPhoto;
};

const deletePhoto = async id => {
  const deletedPhoto = await query.deletePhoto(id);
  return deletedPhoto;
};

module.exports = {
  getAllPhotos,
  getPhotoById,
  createPhoto,
  updatePhoto,
  deletePhoto
};
