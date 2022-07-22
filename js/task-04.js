
let counterValue = 0;


const decrementBtn = document.querySelector(`[data-action="decrement"]`);
const incrementBtn = document.querySelector(`[data-action="increment"]`);
const counterEl = document.querySelector('.counter');
const spanEl = document.querySelector('#value');


decrementBtn.addEventListener(`click`, () => {
    counterValue -= 1;
    spanEl.textContent = counterValue;
});


incrementBtn.addEventListener(`click`, () => {
    counterValue += 1;
    spanEl.textContent = counterValue;
});


