;(function() {
$(".menu__name").on("click", function (e) {
    e.preventDefault();
    $(this).parent().toggleClass("menu__item_active").siblings().removeClass("menu__item_active");
});


$(".menu__close-btn").on("click", function(e) {
    e.preventDefault();
    console.log($(this).closest(".menu__item"));
    $(this).closest(".menu__item").removeClass("menu__item_active");
})
})()