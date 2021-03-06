const query = require('../queries/users_queries');

const getAllUsers = async () => {
  const users = await query.getAllUsers();
  return users;
};

const getUserById = async id => {
  const userById = await query.getUserById(id);
  return userById;
};

const getUserByEmail = async email => {
  const userByEmail = await query.getUserByEmail(email);
  return userByEmail;
};

const getUserProjects = async user => {
  const userProjects = await query.getUserProjects(user);
  return userProjects;
};

const createUser = async User => {
  const newUser = await query.createUser(User);
  return newUser;
};

const updateUser = async (id, body) => {
  const updatedUser = await query.updateUser(id, body);
  return updatedUser;
};

const deleteUser = async id => {
  const deletedUser = await query.deleteUser(id);
  return deletedUser;
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