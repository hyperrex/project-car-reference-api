exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('user_project')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('user_project').insert([
        {
          id: 1,
          users_id: 1,
          projects_id: 1
        },
        {
          id: 2,
          users_id: 2,
          projects_id: 2
        },
        {
          id: 3,
          users_id: 3,
          projects_id: 3
        },
        {
          id: 4,
          users_id: 4,
          projects_id: 4
        },
        {
          id: 5,
          users_id: 5,
          projects_id: 5
        }
      ]);
    })
    .then(() =>
      knex.raw(
        `SELECT setval('"user_project_id_seq"', (SELECT MAX("id") FROM "user_project"))`
      )
    );
};
