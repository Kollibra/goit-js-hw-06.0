const categoriesEl = document.querySelectorAll('.item')

console.log(`Number of categories: ${categoriesEl.length}`);

const itemEl = document.querySelectorAll('.item h2').forEach(number =>
  console.log(`Category: ${number.textContent} 
   Elements: ${number.nextElementSibling.children.length}`));
    







