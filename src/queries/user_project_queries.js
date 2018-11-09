const knex = require('../../db/db');

const getAllUserProjects = async () => {
  return await knex('user_project').orderBy('created_at');
};

const getUserProjectById = async id => {
  return await knex('user_project').where('id', id);
};

const createUserProject = async body => {
  return await knex('user_project')
    .insert(body)
    .returning('*')
    .catch(err => {
      console.error(err);
      knex.destroy();
      process.exit(1);
    });
};

const updateUserProject = async (id, body) => {
  return await knex('user_project')
    .where('id', id)
    .update({
      users_id: body.users_id,
      projects_id: body.projects_id
    })
    .returning('*')
    .catch(err => {
      console.error(err);
      knex.destroy();
      process.exit(1);
    });
};

const deleteUserProject = async id => {
  return await knex('user_project')
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
  getAllUserProjects,
  getUserProjectById,
  createUserProject,
  updateUserProject,
  deleteUserProject
};

