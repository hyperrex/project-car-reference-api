exports.up = function(knex) {
  return knex.schema.createTable('photos', function(table) {
    // id
    table.increments();
    // url
    table.string('url', 255).notNullable().defaultsTo('');
    // title
    table.string('title', 60).defaultsTo('');
    // description
    table.text('description').defaultsTo('');
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
  return knex.schema.dropTable('photos');
};
