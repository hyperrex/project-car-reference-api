const query = require('../queries/projects_queries');

const getAllProjects = async () => {
  const projects = await query.getAllProjects();
  return projects;
};

const getProjectById = async id => {
  const projectById = await query.getProjectById(id);
  return projectById;
};

const createProject = async Project => {
  const newProject = await query.createProject(Project);
  return newProject;
};

const updateProject = async (id, body) => {
  const updatedProject = await query.updateProject(id, body);
  return updatedProject;
};

const deleteProject = async id => {
  const deletedProject = await query.deleteProject(id);
  return deletedProject;
};

module.exports = {
  getAllProjects,
  getProjectById,
  createProject,
  updateProject,
  deleteProject
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