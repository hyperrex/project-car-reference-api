exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('photos')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('photos').insert([
        {
          id: 1,
          url: 'https://i.imgur.com/8lkZuj0.jpg',
          title: 'Turbo control and emissions solenoids',
          description: 'n/a',
          projects_id: 1
        },
        {
          id: 2,
          url: 'https://i.imgur.com/KCYWqmd.jpg',
          title: 'Vacuum Hose Routing Diagram',
          description: 'use metric 3.5mm silicone hose, not Imperial 3/16"',
          projects_id: 1
        },
        {
          id: 3,
          url: 'https://i.imgur.com/rZX3rMq.jpg',
          title: 'Suspension Settings',
          description: 'clevis is attached to the inboard hole.',
          projects_id: 2
        },
        {
          id: 4,
          url: 'https://i.imgur.com/yNpIHEK.jpg',
          title: 'Air bag wiring and ground',
          description: 'Reference photo of airbag connectors to match JDM option wheel.',
          projects_id: 3
        },
        {
          id: 5,
          url: 'https://i.imgur.com/Jn5r66s.jpg',
          title: 'Driver side under dash wire routing',
          description: 'Connector identifier',
          projects_id: 3
        },
        {
          id: 6,
          url: 'https://i.imgur.com/574L1he.jpg',
          title: 'Driver side kick panel wire routing',
          description: '',
          projects_id: 3
        },
        {
          id: 7,
          url: 'https://i.imgur.com/kicAdx9.jpgg',
          title: 'HVAC re-wire',
          description: '',
          projects_id: 3
        },
        {
          id: 8,
          url: 'https://i.imgur.com/VHvYGKX.jpg',
          title: 'ECM wire routing',
          description: '',
          projects_id: 4
        },
        {
          id: 9,
          url: 'https://i.imgur.com/TLrW2WG.jpg',
          title: 'ECM wiring and fan controller sub-harness',
          description: '',
          projects_id: 4
        },
        {
          id: 10,
          url: 'https://i.imgur.com/1FqMGOO.jpg',
          title: 'Relays to replace (research part number)',
          description: '',
          projects_id: 5
        },
        {
          id: 11,
          url: 'https://i.imgur.com/okHlYjM.jpg',
          title: 'Broken power steering wire connector (find)',
          description: '',
          projects_id: 5
        }
      ]);
    })
    .then(() =>
      knex.raw(
        `SELECT setval('"photos_id_seq"', (SELECT MAX("id") FROM "photos"))`
      )
    );
};
