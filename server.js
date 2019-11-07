const express = require('express');
const helmet= require('helmet');

const RecipesRouter = require('./recipes/recipes-router');
const IngredientsRouter = require('./ingredients/ingredients-router');

const server = express();

server.use(helmet());
server.use(express.json());
server.use('/api/recipes', RecipesRouter);
server.use('/api/ingredients', IngredientsRouter);

server.get('/', (req, res) => {
    res.send('testing!!!')
})

module.exports = server;