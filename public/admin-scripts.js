//ADD INGREDIENT FUNCTION
function addIngredient() {
  const ingredients = document.querySelector('#ingredients')
  const fieldContainer = document.querySelectorAll('.ingredient')
  console.log('cheguei')
  // realiza um clone do ultimo ingrediente adicionado
  const newField = fieldContainer[fieldContainer.length - 1].cloneNode(true)

  // Não adiciona um novo input se o ultimo tem um valor vazio
  if (newField.children[0].value == '') return false

  // Deixa o valor do input vazio
  newField.children[0].value = ''
  ingredients.appendChild(newField)
  
}

function addPreparation() {
  const ingredients = document.querySelector('#preparations')
  const fieldContainer = document.querySelectorAll('.preparation')


  const newField = fieldContainer[fieldContainer.length - 1].cloneNode(true)


  if (newField.children[0].value == '') return false


  newField.children[0].value = ''
  ingredients.appendChild(newField)
}

document
  .querySelector('.add-preparation')
  .addEventListener('click', addPreparation)

document
  .querySelector('.add-ingredient')
  .addEventListener('click', addIngredient)
