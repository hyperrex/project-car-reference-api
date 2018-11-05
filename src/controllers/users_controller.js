const model = require('../models/users_model');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const env = require('../../env');
let salt = bcrypt.genSaltSync(10);

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
    const checkEmail = await model.getUserByEmail(req.body.email);
    console.log('>>>>', checkEmail);
    if (checkEmail == []) {
      return res.status(401).json({ error: 'Email already taken.' });
    }
    const hashed = bcrypt.hashSync(req.body.password, salt);
    delete req.body.password;
    req.body.hash = hashed;

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
    if (!req.body.email || !req.body.password) {
      return res
        .status(400)
        .json({ error: 'You must enter a name and password!' });
    }
    const user = await model.getUserByEmail(req.body.email);
    if (!user) {
      return res
        .status(401)
        .json({ error: 'Username or password is invalid!' });
    }
    const isValid = await bcrypt.compare(req.body.password, user[0].hash);
    if (isValid) {
      delete user[0].hash;
      const timeIssued = Math.floor(Date.now() / 1000);
      const timeExpires = timeIssued + 86400 * 28;
      const token = await jwt.sign(
        {
          iss: 'Project-Car-Reference',
          aud: user.name,
          iat: timeIssued,
          exp: timeExpires,
          identity: user.id
        },
        env.JWT_KEY
      );
      return res
        .status(200)
        .set({ authorization: token })
        .json(user);
    } else {
      return res
        .status(401)
        .json({ error: 'Username or password is invalid!' });
    }
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
