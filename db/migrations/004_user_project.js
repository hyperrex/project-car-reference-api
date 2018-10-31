exports.up = function(knex) {
  return knex.schema.createTable('user_project', function(table) {
    // id
    table.increments();
    // users id foreign key
    table.integer('users_id').notNullable();
    // references
    table
      .foreign('users_id')
      .references('users.id')
      .onDelete('CASCADE');
    // projects id foreign key
    table.integer('projects_id').notNullable();
    // references
    table
      .foreign('projects_id')
      .references('projects.id')
      .onDelete('CASCADE');
    // Timestamps
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('user_project');
};