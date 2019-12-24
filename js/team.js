// const teamItems = document.querySelectorAll('.team__item');
// for (let i = 0; i < teamItems.length; i += 1) {
//     teamItems[i].addEventListener("click", e => {
//         if (!teamItems[i].classList.contains("team__item_active")) {
//             for (let j = 0; j < teamItems.length; j += 1) {
//                 teamItems[j].classList.remove("team__item_active");
//             }
//         }
//         teamItems[i].classList.toggle("team__item_active");
//     })
// };

const teamItems = $(".team__item");
teamItems.on("click", function () {
    console.log($(this));
        $(this).siblings().removeClass('team__item_active');
        $(this).toggleClass("team__item_active");
});
