const fs = require('fs')
const recipes = require('./data')

exports.index = function(req, res) {
  return res.render('index', { recipes })
}

exports.list = function(req, res) {
  return res.render('recipes', { recipes })
}

exports.recipeDetails = function(req, res) {
  const index = req.params.index;

  return res.render('recipeDetails', { recipe: recipes[index] });
}