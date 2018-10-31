const model = require('../models/users_model');

// getAllUsers
const getAllUsers = async (req, res, next) => {
  try {
    const users = await model.getAllUsers();
    return res.status(200).json(users);
  } catch (error) {
    console.log(error);
  }
};

// getUserById
const getUserById = async (req, res, next) => {
  try {
    const userById = await model.getUserById(req.params.id);
    return res.status(200).json(userById);
  } catch (error) {
    console.log(error);
  }
};

// createUser >> req.body
const createUser = async (req, res, next) => {
  try {
    const user = await model.createUser(req.body);
    return res.status(201).json(user);
  } catch (error) {
    console.log(error);
  }
};

// updateUser >> req.params.id, req.body
const updateUser = async (req, res, next) => {
  try {
    const user = await model.updateUser(req.params.id, req.body);
    return res.status(201).json(user);
  } catch (error) {
    console.log(error);
  }
};

// deleteUser
const deleteUser = async (req, res, next) => {
  try {
    const user = await model.deleteUser(req.params.id);
    return res.status(201).json(user);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser
};
