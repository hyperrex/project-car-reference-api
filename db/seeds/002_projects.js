
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('projects')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('projects').insert([
        {
          id: 1,
          title: 'Emissions and Turbo Control Re-Installation',
          description: 'Diagrams needed for re-installation of emissions and twin turbo control system.'
        },
        {
          id: 2,
          title: 'Suspension Notes',
          description:
            'Reminder of how I set the rear suspension links.'
        },
        {
          id: 3,
          title: 'Dashboard disassembly',
          description: 'Reference photos of dashboard electronics routing'
        },
        {
          id: 4,
          title: 'ECM rewire',
          description:
            'Reference for ECM wiring.'
        },
        {
          id: 5,
          title: 'Stuff to replace',
          description: 'Pictures of things that need research before replacing.'
        }
      ]);
    })
    .then(() =>
      knex.raw(
        `SELECT setval('"projects_id_seq"', (SELECT MAX("id") FROM "projects"))`
      )
    );
};
