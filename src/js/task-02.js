const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ingredientsRef = document.querySelector('#ingredients');

const makeIngredients = ingredients => {
  return ingredients.map(ingredients => {
    const itemRef = document.createElement('li');

    itemRef.textContent = ingredients;
    itemRef.classList.add('item');
    return itemRef;
  });
}
const elements = makeIngredients(ingredients);
ingredientsRef.append(...elements);
console.log(ingredientsRef);

