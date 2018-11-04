exports.up = function(knex) {
  return knex.schema.createTable('users', function(table) {
    // id
    table.increments();
    // first name
    table.string('first_name', 30).notNullable().defaultsTo('');
    // last name
    table.string('last_name', 30).notNullable().defaultsTo('');
    // email
    table.string('email', 255).notNullable().defaultsTo('');
    // hashed password
    table.string('hashed_password', 60).notNullable().defaultsTo('');
    // Timestamps
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('users');
};