const knex = require('../../db/db');

const getAllPhotos = async () => {
  return await knex('photos').orderBy('created_at');
};

const getPhotoById = async id => {
  return await knex('photos').where('id', id);
};

const createPhoto = async body => {
  return await knex('photos')
    .insert(body)
    .returning('*')
    .catch(err => {
      console.error(err);
      knex.destroy();
      process.exit(1);
    });
};

const updatePhoto = async (id, body) => {
  return await knex('photos')
    .where('id', id)
    .update({
      url: body.url,
      title: body.title,
      description: body.description,
      projects_id: body.projects_id
    })
    .returning('*')
    .catch(err => {
      console.error(err);
      knex.destroy();
      process.exit(1);
    });
};

const deletePhoto = async id => {
  return await knex('photos')
    .where('id', id)
    .del()
    .returning('*')
    .catch(err => {
      console.error(err);
      knex.destroy();
      process.exit(1);
    });
};

module.exports = {
  getAllPhotos,
  getPhotoById,
  createPhoto,
  updatePhoto,
  deletePhoto
};
