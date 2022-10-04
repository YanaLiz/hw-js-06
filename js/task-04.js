
const BtnDecrement = document.querySelectorAll("button")[0];
console.log(BtnDecrement);
const BtnIncrement = document.querySelectorAll("button")[1];
console.log(BtnIncrement);
let counterValue = 0;

BtnIncrement.addEventListener(`click`, (event) => {
    counterValue += 1;
    const valueEl = document.querySelector('span');
    valueEl.textContent = counterValue;
});
BtnDecrement.addEventListener(`click`, (event) => {
    counterValue = counterValue - 1;
    const valueEl = document.querySelector('span');
    valueEl.textContent = counterValue;
});


