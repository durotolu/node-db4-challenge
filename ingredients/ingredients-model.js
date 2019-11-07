const db = require('../data/db-config')

function getRecipesList(ingredient_id) {
    return db('ingredients as i')
        .join('recipesIngredients as ri')
        .join('recipes as r', 'ri.recipesId', 'r.id')
        .select('i.ingredientName', 'r.mealName')
        .where({ 'i.id': ingredient_id });
}

module.exports = {
    getRecipesList
}