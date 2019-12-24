const ingredients = $('.burgers__ingredients');
ingredients.on("click", function(e) {
    const error = $(this).find(".burgers__ingredients-list");
    console.log(error);
    console.log(e.target);
    if(e.target === error.get(0)) return;
    $(this).toggleClass('burgers__ingredients_active');

});
// forEach(element => element
//     .addEventListener("click", () => element.classList.toggle('burgers__ingredients_active')));

// const burgersList = document.querySelector(".burgers__list");
// const burgers = document.querySelectorAll(".burgers__item");
// const container = document.querySelector(".burgers__container");
// const widthContainer = parseInt(window.getComputedStyle(container).width);
// const amountBurgers = burgers.length;
// // burgersList.style.width = widthContainer * amountBurgers + "px";
// burgersList.style.right = 0 + "px";

// const scrollRight = document.querySelector(".scroll_right");
// const scrollLeft = document.querySelector(".scroll_left");

// scrollLeft.addEventListener("click", event => {
//     event.preventDefault();
//     const offset = parseInt(window.getComputedStyle(burgersList).right);
//     if (offset >= widthContainer * (amountBurgers - 1)) {
//         burgersList.style.right = offset
//     } else {
//         burgersList.style.right = 1 * 100  + "%";
//     }

// })
// scrollRight.addEventListener("click", event => {
//     event.preventDefault();
//     const offset = parseInt(window.getComputedStyle(burgersList).right);
//     if (offset < widthContainer) {
//         burgersList.style.right = offset
//     } else {
//         burgersList.style.right = offset - widthContainer + "px";
//     }

// })

function moveSlide(slider, numSlide) {
    const 
        sliderItems = slider.find(".burgers__item");
        activeSlide = sliderItems.filter(".burgers__item_avtive");
        reqItem = sliderItems.eq(numSlide);
        reqIndex = reqItem.index();
        if (reqItem.length) {
            slider.animate({
                right: reqIndex * 100 + "%"
            }, 100, function() {
                activeSlide.removeClass("burgers__item_avtive");
                reqItem.addClass("burgers__item_avtive");
            })
        }   
}

function moveToDirection(direction) {
    const
    container = $(".burgers__container"),
    burgerSlider = container.find(".burgers__list"),
    sliderItems = burgerSlider.find(".burgers__item"),
    activeSlide = sliderItems.filter(".burgers__item_avtive"),
    nextSlide = activeSlide.next(),
    prevSlide = activeSlide.prev();
 
    if (direction === "next" && nextSlide.length) {
        moveSlide(burgerSlider, nextSlide.index());
    }
    if (direction === "prev" && prevSlide.length) {
        moveSlide(burgerSlider, prevSlide.index());
    }


}

$(".scroll_left").on("click", function(e) {
    e.preventDefault();
    moveToDirection("next")
})
$(".scroll_right").on("click", function(e) {
    e.preventDefault(); 
    moveToDirection("prev")
})



