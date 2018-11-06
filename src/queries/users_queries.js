const knex = require('../../db/db');

const getAllUsers = async () => {
  return await knex('users').orderBy('created_at');
};

const getUserById = async id => {
  return await knex('users').where('id', id);
};

const getUserByEmail = async email => {
  return await knex('users').where('email', email);
};

const getUserProjects = async id => {
  return await knex('user_project')
    .where('users_id', id)
    .join('projects', 'projects.id', '=', 'user_project.projects_id');
};

const createUser = async body => {
  return await knex('users')
    .insert(body)
    .returning('*')
    .catch(err => {
      console.error(err);
      knex.destroy();
      process.exit(1);
    });
};

const updateUser = async (id, body) => {
  return await knex('users')
    .where('id', id)
    .update({
      first_name: body.first_name,
      last_name: body.last_name,
      email: body.email,
      hashed_password: body.hashed_password
    })
    .returning('*')
    .catch(err => {
      console.error(err);
      knex.destroy();
      process.exit(1);
    });
};

const deleteUser = async id => {
  return await knex('users')
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
  getAllUsers,
  getUserById,
  getUserByEmail,
  getUserProjects,
  createUser,
  updateUser,
  deleteUser
};