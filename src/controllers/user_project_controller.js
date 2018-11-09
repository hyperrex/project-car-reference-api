const model = require('../models/user_project_model');

// getAllUserProject
const getAllUserProjects = async (req, res, next) => {
  try {
    const userProjects = await model.getAllUserProjects();
    return res.status(200).json(userProjects);
  } catch (error) {
    console.log(error);
  }
};

// getUserProjectById
const getUserProjectById = async (req, res, next) => {
  try {
    const userProjectById = await model.getUserProjectById(req.params.id);
    return res.status(200).json(userProjectById);
  } catch (error) {
    console.log(error);
  }
};

// createUserProject >> req.body
const createUserProject = async (req, res, next) => {
  try {
    const project = await model.createUserProject(req.body);
    return res.status(201).json(project);
  } catch (error) {
    console.log(error);
  }
};

// updateUserProject >> req.params.id, req.body
const updateUserProject = async (req, res, next) => {
  try {
    const project = await model.updateUserProject(req.params.id, req.body);
    return res.status(201).json(project);
  } catch (error) {
    console.log(error);
  }
};

// deleteUserProject
const deleteUserProject = async (req, res, next) => {
  try {
    const project = await model.deleteUserProject(req.params.id);
    return res.status(201).json(project);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getAllUserProjects,
  getUserProjectById,
  createUserProject,
  updateUserProject,
  deleteUserProject
};
