const knex = require('../../db/db');

const getAllProjects = async () => {
  return await knex('projects').orderBy('created_at');
};

const getProjectById = async id => {
  return await knex('projects')
    .where('projects.id', id)
    .first()
    .then(result => {
      return knex('user_project')
        .join('users', 'users.id', '=', 'user_project.users_id')
        .where('users_id', id)
        .then(users => {
          result.users = users;
          return result;
        });
    });
};

// const getProjectsByUser = async user => {
//   return await knex('user_project')
//     .where('user.id', user)
//     .first()
//     .then(result => {
//       return knex('user_project')
//         .join('users', 'users.id', '=', 'user_project.users_id')
//         .where('users_id', id)
//         .then(users => {
//           result.users = users;
//           return result;
//         });
//     });
// };

const createProject = async body => {
  return await knex('projects')
    .insert(body)
    .returning('*')
    .catch(err => {
      console.error(err);
      knex.destroy();
      process.exit(1);
    });
};

const updateProject = async (id, body) => {
  return await knex('projects')
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

const deleteProject = async id => {
  return await knex('projects')
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
  getAllProjects,
  getProjectById,
  createProject,
  updateProject,
  deleteProject
};
