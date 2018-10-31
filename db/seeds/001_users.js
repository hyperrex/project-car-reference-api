exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('users').insert([
        {
          id: 1,
          first_name: 'Malcolm',
          last_name: 'Reynolds',
          email: 'tightpants@serenity.com'
          // hashed_password: ''
        },
        {
          id: 2,
          first_name: 'Hoban',
          last_name: 'Washburne',
          email: 'leftpilot@serenity.com'
          // hashed_password: ''
        },
        {
          id: 3,
          first_name: 'Zoe',
          last_name: 'Washburne',
          email: 'warrior@serenity.com'
          // hashed_password: ''
        },
        {
          id: 4,
          first_name: 'Jayne',
          last_name: 'Cobb',
          email: 'cunning@serenity.com'
          // hashed_password: ''
        },
        {
          id: 5,
          first_name: 'Kaylee',
          last_name: 'Frye',
          email: 'sweetie@serenity.com'
          // hashed_password: ''
        }
      ]);
    })
    .then(() =>
      knex.raw(
        `SELECT setval('"users_id_seq"', (SELECT MAX("id") FROM "users"))`
      )
    );
};
