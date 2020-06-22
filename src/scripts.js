const modalOverlay = document.querySelector('.modal-overlay');
const recipes = document.querySelectorAll('.recipe-image');

for (let recipe of recipes) {
  recipe.addEventListener('click', function(){
    modalOverlay.classList.add('active');
  });
}

document.querySelector('.close-modal').addEventListener('click', function(){
  modalOverlay.classList.remove('active');
});