const menuItems = document.querySelectorAll('.menu__item');
for (let i = 0; i < menuItems.length; i += 1) {
    menuItems[i].addEventListener("click", e => {
        e.preventDefault();
        if (!menuItems[i].classList.contains("menu__item_active")) {
            for (let j = 0; j < menuItems.length; j += 1) {
                menuItems[j].classList.remove("menu__item_active");
            }
        }
        menuItems[i].classList.toggle("menu__item_active");
    })
};
