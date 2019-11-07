const express = require('express');

const Ingredients = require('./ingredients-model');

const router = express.Router();


router.get('/:id/recipes', (req, res) => {
    const { id } = req.params;
  
    Ingredients.getRecipesList(id)
    .then(recipes => {
      if (recipes.length) {
        res.json(recipes);
      } else {
        res.status(404).json({ 'Could not find recipes for given Ingredient': err.message })
      }
    })
    .catch(err => {
      res.status(500).json({ 'Failed to get list': err.message });
    });
});

module.exports = router;