// const modalReviews = document.querySelector(".modal-reviews");
// const reviews = document.querySelector(".reviews__list");
// const btnDetail = reviews.querySelectorAll(".btn");
// const closeBtnCross = modalReviews.querySelector(".modal-reviews__close");


// const textReview = modalReviews.querySelector(".modal-reviews__content");
// const nameAuthor = modalReviews.querySelector(".modal-reviews__author");


// btnDetail.forEach(btn => {
//     let authorReview = btn.previousElementSibling.previousElementSibling.previousElementSibling.textContent;
//     let detailTextReview = btn.previousElementSibling.textContent;
//     btn.addEventListener("click", e => {
//         e.preventDefault();
//         textReview.textContent = detailTextReview;
//         nameAuthor.textContent = authorReview;
//         modalReviews.classList.add("modal_active");
//         document.body.style.overflow = "hidden";
//     })
// });


// closeBtnCross.addEventListener("click", e => {
//     e.preventDefault();
//     modalReviews.classList.remove("modal_active");
//     document.body.removeAttribute('style');
// })

// modalReviews.addEventListener("click", (e) => {
//     if(e.target === modalReviews) {
//         closeBtnCross.click();
//     }$

// })

const modalReviews = $(".modal-reviews"),
    closeBtnCross = $(".modal-reviews__close"),
    textReviewModal = $(".modal-reviews__content"),
    nameAuthor = $(".modal-reviews__author"),
    btnDetail = $(".btn", ".reviews__list");

btnDetail.on("click", function(e) {
    e.preventDefault();
    const authorReview = $(this).parent().find(".reviews__name").text();
    const detailTextReview = $(this).parent().find(".reviews__detail-text").text();
    textReviewModal.text(detailTextReview);
    nameAuthor.text(authorReview);
    modalReviews.addClass("modal_active");
    $('body').css("overflow", "hidden");
})

closeBtnCross.on("click", function(e) {
    e.preventDefault();
    modalReviews.removeClass("modal_active");
    $('body').css("overflow", "");
})
modalReviews.on("click", function(e) {
    if(e.target === $(this).get(0)) {
        closeBtnCross.click();
    }
})