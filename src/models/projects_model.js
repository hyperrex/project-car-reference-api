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