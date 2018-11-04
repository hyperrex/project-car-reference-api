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
          email: 'tightpants@serenity.com',
          hashed_password: '$2a$10$PSUktwI9rIRCUR76qqMebuX7blSMkaS3EMrnEeU59NiQ4wb2WL1D2'
        },
        {
          id: 2,
          first_name: 'Hoban',
          last_name: 'Washburne',
          email: 'leftpilot@serenity.com',
          hashed_password: '$2a$10$Xj/pZk.KVrMg6GK2Zi/sq.YFzaQjQLByok.BW50DRqtvI3/amA8uS'
        },
        {
          id: 3,
          first_name: 'Zoe',
          last_name: 'Washburne',
          email: 'warrior@serenity.com',
          hashed_password: '$2a$10$nLtjQ8J9tNnd/jo0saF5fegrGlse4vkOlf.DD21PcPanp7FjmUnk6'
        },
        {
          id: 4,
          first_name: 'Jayne',
          last_name: 'Cobb',
          email: 'cunning@serenity.com',
          hashed_password: '$2a$10$DuNb3XiXey2kJkSFCaiAie7X9lxlTgdZu7m0nddYjqDbBP438nryG'
        },
        {
          id: 5,
          first_name: 'Kaylee',
          last_name: 'Frye',
          email: 'sweetie@serenity.com',
          hashed_password: '$2a$10$ebqr.5/DXqArlzHWnmmYrOsa24acuKr63puJoBHEz6J.PfBd.Kqfq'
        }
      ]);
    })
    .then(() =>
      knex.raw(
        `SELECT setval('"users_id_seq"', (SELECT MAX("id") FROM "users"))`
      )
    );
};
