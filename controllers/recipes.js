const fs = require('fs')
const data = require('../data.json')

exports.index = function(req, res) {
  const recipes = data.recipes
  return res.render('index', { recipes })
}

exports.list = function(req, res) {
  const recipes = data.recipes
  return res.render('recipes', { recipes })
}

exports.recipeDetails = function(req, res) {
  const index = req.params.index;

  return res.render('recipeDetails', { recipe: data.recipes[index] });
}

//ADMIN
exports.indexAdmin = function(req, res) {

  const recipes = data.recipes
  return res.render('recipes/recipes', { recipes })
}

exports.post = function(req, res) {
  const keys = Object.keys(req.body)

  for (key of keys) {
    if (req.body[key] == '')
      return res.send('Please fill all fields')
  }

  let { image, title, ingredients, preparations, author, information } = req.body
  
  data.recipes.push({
    image,
    title, 
    ingredients,
    preparations,
    author,
    information
  })

  fs.writeFile('data.json', JSON.stringify(data, null, 2), function(err) {
    if (err) return res.send('Write file error!')

    return res.redirect('admin/recipes')
  })
}

exports.create = function(req, res) {
  return res.render('recipes/create')
}