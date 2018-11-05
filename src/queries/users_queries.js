const knex = require('../../db/db');

const getAllUsers = async () => {
  return await knex('users').orderBy('created_at');
};

const getUserById = async id => {
  return await knex('users').where('id', id);
};

const getUserByEmail = async email => {
  return await knex('users').where('email', email);
};

const createUser = async body => {
  return await knex('users')
    .insert(body)
    .returning('*')
    .catch(err => {
      console.error(err);
      knex.destroy();
      process.exit(1);
    });
};

const updateUser = async (id, body) => {
  return await knex('users')
    .where('id', id)
    .update({
      first_name: body.first_name,
      last_name: body.last_name,
      email: body.email,
      hashed_password: body.hashed_password
    })
    .returning('*')
    .catch(err => {
      console.error(err);
      knex.destroy();
      process.exit(1);
    });
};

const deleteUser = async id => {
  return await knex('users')
    .where('id', id)
    .del()
    .returning('*')
    .catch(err => {
      console.error(err);
      knex.destroy();
      process.exit(1);
    });
};

// const tryLogin = async (email, hash) => {
//   return await knex('users')
//     .where(email, email)
//     .where(hash, hash);
// };

module.exports = {
  getAllUsers,
  getUserById,
  getUserByEmail,
  createUser,
  updateUser,
  deleteUser
  // tryLogin
};

/*
  validateUser = (userInfo) => {
    return knex('users')
        .select(['users.id', 'users.name'])
        .where('users.email', userInfo.email)
        .where('users.password', userInfo.password)
  }
*/
