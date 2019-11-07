const express = require('express');

const Recipes = require('./recipes-model');

const router = express.Router();

router.get('/', (req, res) => {
    Recipes.getRecipes()
    .then(recipes => {
      res.json(recipes);
    })
    .catch(err => {
      res.status(500).json({ 'Failed to get recipes': err.message });
    });
  });

  router.get('/:id/list', (req, res) => {
    const { id } = req.params;
  
    Recipes.getShoppingList(id)
    .then(lists => {
      if (lists.length) {
        res.json(lists);
      } else {
        res.status(404).json({ 'Could not find lists for given recipe': err.message })
      }
    })
    .catch(err => {
      res.status(500).json({ 'Failed to get list': err.message });
    });
  });

  router.get('/:id/instructions', (req, res) => {
    const { id } = req.params;
  
    Recipes.getInstructions(id)
    .then(instructions => {
      if (instructions.length) {
        res.json(instructions);
      } else {
        res.status(404).json({ 'Could not find instructions for given recipe': err.message })
      }
    })
    .catch(err => {
      res.status(500).json({ 'Failed to get list': err.message });
    });
  });
  
  module.exports = router;