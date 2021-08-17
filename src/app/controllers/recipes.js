const Recipe = require('../models/Recipe')

module.exports = {
  index(req, res) {
    return res.render('index')

  },
  list(req, res) {
    return
  },
  recipeDetails(req, res) {
    return
  },
  //ADMIN
  indexAdmin(req, res) {
    Recipe.all( (recipes) => {
      return res.render('recipes/recipes', { recipes })
    })
  },
  post(req, res) {
    const keys = Object.keys(req.body)

    for (key of keys) {
      if (req.body[key] == '')
        return res.send('Please fill all fields')
    }

    Recipe.create(req.body, (recipe) => {
      return res.redirect(`/admin/recipes/${recipe.id}`)
    })
  },
  create(req, res) {
    return res.render('recipes/create')
  },
  show(req, res) {
    const index = req.params.id

    return res.send(index)
  },
  edit(req, res) {
    const index = req.params.id

    if (!data.recipes[index]) return res.send('Recipe not found')

   return
  },
  put(req, res) {
    const { id } = req.body
    if (!data.recipes[id]) return res.send('Recipe not found')

    return
  },
  delete(req, res) {
    const { id } = req.body

    return
  }
}