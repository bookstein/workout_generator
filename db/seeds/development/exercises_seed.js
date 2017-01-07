const benchPress = {
  name: "bench press",
  type: "upper",
  weight: "light"
}

const heavyBenchPress = {
  name: "bench press",
  type: "upper",
  weight: "heavy"
}

const benchPress1RM = {
  name: "bench press",
  type: "upper",
  weight: "1RM"
}

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('exercises').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('exercises').insert(benchPress),
        knex('exercises').insert(heavyBenchPress),
        knex('exercises').insert( benchPress1RM)
      ]);
    });
};
