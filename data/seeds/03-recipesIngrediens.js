
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipesIngredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipesIngredients').insert([
        {recipesId: 1, ingredientsId: 1, ingredientQuantity: 1.5},
        {recipesId: 1, ingredientsId: 3, ingredientQuantity: 0.2},
        {recipesId: 2, ingredientsId: 1, ingredientQuantity: 3.2},
        {recipesId: 2, ingredientsId: 3, ingredientQuantity: 0.7},
        {recipesId: 3, ingredientsId: 1, ingredientQuantity: 0.8},
        {recipesId: 3, ingredientsId: 2, ingredientQuantity: 2},
      ]);
    });
};
