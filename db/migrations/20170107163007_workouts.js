
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('workouts', function(table){
      table.increments();
      table.string('type').notNullable();
      table.timestamp('created_at').defaultTo(knex.fn.now()).notNullable();
      table.boolean('favorite').defaultTo('false').notNullable();
      table.timestamp('last_seen').defaultTo(knex.fn.now());
    }),
    knex.schema.createTable('sets', function(table){
      table.increments();
      table.timestamp('created_at').defaultTo(knex.fn.now()).notNullable();
      table.integer('reps').notNullable();
      table.integer('weight').notNullable();
      table.integer('exercise_id').notNullable();
      table.foreign('exercise_id').references('Exercises.id');
      table.integer('set_number').notNullable();
      table.unique(['timestamp', 'exercise_id', 'number'])
    })
  ]) 
};

exports.down = function(knex, Promise) {
  return Promise.all([ 
      knex.schema.dropTable('workouts'),
      knex.schema.dropTable('sets')
  ])
};
