
exports.up = function(knex, Promise) { // why does this take a Promise?
  return Promise.all([
    knex.schema.createTable('exercises', function(table){
      table.increments();
      table.string('name').notNullable();
      table.string('type').notNullable();
      table.string('weight').notNullable();
      table.text('desc');
    }),
  ]) 
};


exports.down = function(knex, Promise) {
    return knex.schema.dropTable('exercises');
};
