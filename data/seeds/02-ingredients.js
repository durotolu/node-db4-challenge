
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {ingredientName: 'Water'},
        {ingredientName: 'Flour'},
        {ingredientName: 'Pepper'}
      ]);
    });
};
