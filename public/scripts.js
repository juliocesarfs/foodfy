const modalOverlay = document.querySelector('.modal-overlay');
const recipes = document.querySelectorAll('.recipe');

for (let recipe of recipes) {
  recipe.addEventListener('click', function(){
    modalOverlay.classList.add('active');

    const recipeImg = recipe.getAttribute('id');
    const recipeName = recipe.querySelector('h3').textContent;
    const recipeAuthorName = recipe.querySelector('p').textContent;

    modalOverlay.querySelector('h3').textContent = recipeName;
    modalOverlay.querySelector('img').src = `../assets/${recipeImg}`;
    modalOverlay.querySelector('p').textContent = recipeAuthorName;
  });
}

document.querySelector('.close-modal').addEventListener('click', function(){
  modalOverlay.classList.remove('active');
  
});