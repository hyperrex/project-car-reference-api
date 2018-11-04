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

// tryLogin >> req.body
const tryLogin = async (req, res, next) => {
  try {
    const credentials = req.body;
    if (! credentials.email || !credentials.password) {
      return res.status(400).json( { error: 'You must enter a name and password!' });
    }
    const userExists = await model.getUserByEmail(req.body.email);
    if (!userExists) {
      return res.status(400).json( { error: 'User does not exist!' });
    }
    const user = await model.tryLogin(req.body);
    return res.status(200).json(user);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  tryLogin
};

/**
 * look to see if user exists
 * is there req.body email and password
 * invoke getByUserEmail
 * if no user error
 * if usr but wrong password, error
 * if user and passwords match, create jwt and respond 200 ok, token in header, user obj
 */
