const query = require('../queries/user_project_queries');

// getAllUserProjects
const getAllUserProjects = async () => {
  const projects = await query.getAllUserProjects();
  return projects;
};

// getUserProjectById
const getUserProjectById = async id => {
  const projectById = await query.getUserProjectById(id);
  return projectById;
};

// createUserProject
const createUserProject = async data => {
  const newUserProject = await query.createUserProject(data);
  return newUserProject;
};

// updateUserProject
const updateUserProject = async (id, body) => {
  const updatedProject = await query.updateUserProject(id, body);
  return updatedProject;
};

// deleteUserProject
const deleteUserProject = async id => {
  const deletedProject = await query.deleteUserProject(id);
  return deletedProject;
};

module.exports = {
  getAllUserProjects,
  getUserProjectById,
  createUserProject,
  updateUserProject,
  deleteUserProject
};



