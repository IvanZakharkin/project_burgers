const burgerMenu = document.querySelector(".hamburger-menu");
const modal = document.querySelector(".modal-menu");
const nav = document.querySelector(".nav");
burgerMenu.addEventListener("click", (event) => {
    event.preventDefault();

    if (burgerMenu.classList.contains("hamburger-menu_active")) {
        burgerMenu.classList.remove("hamburger-menu_active");
        modal.classList.remove("modal_active");
        nav.style.top = '-9999px';
        // document.body.removeAttribute('style');
    } else {
        burgerMenu.classList.add("hamburger-menu_active");
        modal.classList.add("modal_active");
        nav.style.top = '50%';
        // document.body.style.overflow = "hidden";
    }
})

modal.addEventListener('click', (event) => {
    if (modal.classList.contains("modal_active")) {
        burgerMenu.classList.remove("hamburger-menu_active");
        modal.classList.remove("modal_active");
        nav.style.top = '-9999px';
        // document.body.removeAttribute('style');
    } else {
        
    }
})

nav.addEventListener("click", e => {
    if (modal.classList.contains("modal_active")) {
        burgerMenu.classList.remove("hamburger-menu_active");
        modal.classList.remove("modal_active");
        nav.style.top = '-9999px';
        // document.body.removeAttribute('style');
    }
})