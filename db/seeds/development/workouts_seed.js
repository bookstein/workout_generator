const workout1 = {
  type: 'heavy'
}

const workout2 = {
  type: 'light'
}

const workout3 = {
  type: 'circuit'
}

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('workouts').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('workouts').insert(workout1),
        knex('workouts').insert(workout2),
        knex('workouts').insert(workout3),
      ]);
    });
};
