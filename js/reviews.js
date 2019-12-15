const modalReviews = document.querySelector(".modal-reviews");
const reviews = document.querySelector(".reviews__list");
const btnDetail = reviews.querySelectorAll(".btn");
const closeBtnCross = modalReviews.querySelector(".modal-reviews__close");


const textReview = modalReviews.querySelector(".modal-reviews__content");
const nameAuthor = modalReviews.querySelector(".modal-reviews__author");


btnDetail.forEach(btn => {
    let authorReview = btn.previousElementSibling.previousElementSibling.previousElementSibling.textContent;
    let detailTextReview = btn.previousElementSibling.textContent;
    btn.addEventListener("click", e => {
        e.preventDefault();
        textReview.textContent = detailTextReview;
        nameAuthor.textContent = authorReview;
        modalReviews.classList.add("modal_active");
        document.body.style.overflow = "hidden";
    })
});


closeBtnCross.addEventListener("click", e => {
    e.preventDefault();
    modalReviews.classList.remove("modal_active");
    document.body.removeAttribute('style');
})

modalReviews.addEventListener("click", (e) => {
    if(e.target === modalReviews) {
        closeBtnCross.click();
    }

})