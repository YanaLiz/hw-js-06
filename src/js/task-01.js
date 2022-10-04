

const counter = parent => { return parent.childElementCount };
const message = elements => {
    elements.forEach(element => {
        const firstElem = element.firstElementChild;
        const secondElem = firstElem.nextElementSibling;
        console.log(`Category: ${firstElem.textContent}`);
        console.log(`Elements: ${counter(secondElem)}`);
    });
}
const itemCategory = document.querySelector('#categories');
const liItemOfCategories = itemCategory.querySelectorAll('.item');
console.log(`Number of categories: ${counter(itemCategory)}`);
message(liItemOfCategories);



