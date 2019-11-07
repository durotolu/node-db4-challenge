
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('steps').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('steps').insert([
        {step: 'pour water', recipesId: 1, stepsNumber: 1},
        {step: 'cut tomatoes', recipesId: 1, stepsNumber: 2},
        {step: 'grind pepper', recipesId: 1, stepsNumber: 3}
      ]);
    });
};
