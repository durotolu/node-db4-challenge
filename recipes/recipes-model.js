const db = require('../data/db-config')

module.exports = {
    getRecipes,
    getShoppingList,
    getInstructions
}

function getRecipes() {
    return db('recipes')
}

function getShoppingList(recipe_id) {
    return db('recipes as r')
        .join('recipesIngredients as ri', 'r.id', 'ri.recipesId')
        .join('ingredients as i', 'ri.ingredientsId', 'i.id')
        .select('r.mealName', 'i.ingredientName', 'ri.ingredientQuantity')
        .where({ 'r.id': recipe_id });
}

function getInstructions(recipe_id) {
    return db('recipes as r')
        .join('steps as s', 'r.id', 's.recipesId')
        .select('r.mealName', 's.step', 's.stepsNumber')
        .where({ 'r.id': recipe_id });
}