const form = document.querySelector('.form');
const btnOrder = document.querySelector('.btn_order');
const modalOrder = document.querySelector('.modal-order')
const closeBtn = modalOrder.querySelector('.modal-order__close')
const modalOrderContent = modalOrder.querySelector('.modal-order__content')




btnOrder.addEventListener('click', event => {
    event.preventDefault();
    let xhr = new XMLHttpRequest();

    if(validateForm(form)) {
        let formData = new FormData();
        formData.append("name", form.elements.name.value);
        formData.append("phone", form.elements.phone.value);
        formData.append("comment", form.elements.comment.value);
        formData.append("to", "123@mail.com");
        xhr.open("POST", "https://webdev-api.loftschool.com/sendmail");
        responseType = 'json';
    xhr.send(formData);
    xhr.addEventListener('load', () => {
        modalOrderContent.textContent = JSON.parse(xhr.response).message;
        modalOrder.classList.add("modal_active");
        document.body.style.overflow = "hidden";
        
    })
    }
    

})

closeBtn.addEventListener("click", e => {
    e.preventDefault();
    modalOrder.classList.remove("modal_active");
    document.body.removeAttribute('style');
});
modalOrder.addEventListener("click", (e) => {
    if(e.target === modalOrder) {
        closeBtn.click();
    }

});

function validateField(field) {
    field.nextElementSibling.textContent = field.validationMessage;
    return field.checkValidity();
}

function validateForm(form) {
    let valid = true;
    if(!validateField(form.elements.name) || !validateField(form.elements.phone) || !validateField(form.elements.comment)) {
        valid = false
    }
    return valid;
}