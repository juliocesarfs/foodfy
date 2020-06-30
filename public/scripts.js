const recipes = document.querySelectorAll('.recipe');

for (let recipe of recipes) {
  recipe.addEventListener('click', function(){
    const pageId = recipe.getAttribute('id');

    window.location.href = `/recipes/${pageId}`;
  });
}
