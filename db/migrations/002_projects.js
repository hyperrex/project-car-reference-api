exports.up = function(knex) {
  return knex.schema.createTable('projects', function(table) {
    // id
    table.increments();
    // name
    table.string('title', 60).defaultsTo('');
    // description
    table.text('description').defaultsTo('');
    // Timestamps
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('projects');
};