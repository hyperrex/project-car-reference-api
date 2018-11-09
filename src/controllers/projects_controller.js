const model = require('../models/projects_model');

// getAllProjects
const getAllProjects = async (req, res, next) => {
  try {
    const projects = await model.getAllProjects();
    return res.status(200).json(projects);
  } catch (error) {
    console.log(error);
  }
};

// getProjectById
const getProjectById = async (req, res, next) => {
  try {
    const projectById = await model.getProjectById(req.params.id);
    return res.status(200).json(projectById);
  } catch (error) {
    console.log(error);
  }
};

// createProject >> req.body
const createProject = async (req, res, next) => {
  try {
    const project = await model.createProject(req.body);
    return res.status(201).json(project);
  } catch (error) {
    console.log(error);
  }
};

// updateProject >> req.params.id, req.body
const updateProject = async (req, res, next) => {
  try {
    const project = await model.updateProject(req.params.id, req.body);
    return res.status(201).json(project);
  } catch (error) {
    console.log(error);
  }
};

// deleteProject
const deleteProject = async (req, res, next) => {
  try {
    const project = await model.deleteProject(req.params.id);
    return res.status(201).json(project);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getAllProjects,
  getProjectById,
  createProject,
  updateProject,
  deleteProject
};
