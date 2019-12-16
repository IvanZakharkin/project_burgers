const ingredients = document.querySelectorAll('.burgers__ingredients');
ingredients.forEach(element => element
    .addEventListener("click", () => element.classList.toggle('burgers__ingredients_active')));

const burgersList = document.querySelector(".burgers__list");
const burgers = document.querySelectorAll(".burgers__item");
const container = document.querySelector(".burgers__container");
const widthContainer = parseInt(window.getComputedStyle(container).width);
const amountBurgers = burgers.length;
// burgersList.style.width = widthContainer * amountBurgers + "px";
burgersList.style.right = 0 + "px";

const scrollRight = document.querySelector(".scroll_right");
const scrollLeft = document.querySelector(".scroll_left");

scrollLeft.addEventListener("click", event => {
    event.preventDefault();
    const offset = parseInt(window.getComputedStyle(burgersList).right);
    if (offset >= widthContainer * (amountBurgers - 1)) {
        burgersList.style.right = offset
    } else {
        burgersList.style.right = offset + widthContainer + "px";
    }

})
scrollRight.addEventListener("click", event => {
    event.preventDefault();
    const offset = parseInt(window.getComputedStyle(burgersList).right);
    if (offset < widthContainer) {
        burgersList.style.right = offset
    } else {
        burgersList.style.right = offset - widthContainer + "px";
    }

})