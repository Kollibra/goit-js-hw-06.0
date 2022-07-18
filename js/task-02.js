const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listEl = document.querySelector('#ingredients')
// console.log(listEl); получила ссылку на список
const itemEl = ingredients.map(ingredient => { 
  const itemsEl = document.createElement('li')
  itemsEl.classList.add(`item`);
  itemsEl.textContent = ingredient;


  return itemsEl;
});

// console.log(itemEl); 
listEl.append(...itemEl);

