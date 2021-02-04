const express = require('express')
const routes = express.Router()
const recipes = require('./recipes')


routes.get('/', recipes.index)

routes.get('/about', function(req, res) {
  return res.render('about');
});

routes.get('/recipes', recipes.list);

routes.get('/recipes/:index', recipes.recipeDetails)

module.exports = routes