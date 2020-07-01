const recipes = document.querySelectorAll('.recipe');


for (let recipe of recipes) {
  recipe.addEventListener('click', function(){
    const pageId = recipe.getAttribute('id');

    window.location.href = `/recipes/${pageId}`;
  });
}


// recipeDetails script (button)

const recipeInformation = document.querySelector('.recipeInformations');
const buttons = recipeInformation.querySelectorAll('.show');

if ( recipeInformation.querySelector('.information').firstElementChild.textContent == '' ) {
  const title = recipeInformation.querySelector('.informationTitle');
  title.innerHTML = '';
}


for (let button of buttons) {
  button.addEventListener('click', function() {
    const buttonId = button.getAttribute('id');
    
    if (button.textContent == 'ESCONDER') {
      recipeInformation.querySelector(`.${buttonId}`).style.display = 'none';
      button.textContent = 'MOSTRAR';
    }
    else {
      recipeInformation.querySelector(`.${buttonId}`).style.display = 'block';
      button.textContent = 'ESCONDER';
    }
  });
}


