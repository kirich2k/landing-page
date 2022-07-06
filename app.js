const openMenu = () => {
    let body = document.getElementById("body");
    let btn = document.getElementById("burger-btn");
    let menu = document.getElementById("burger-menu");
    btn?.classList[1] === "_active"
        ? btn.classList.remove("_active")
        : btn.classList.add("_active");
    menu?.classList[1] === "_active"
        ? menu.classList.remove("_active")
        : menu.classList.add("_active");
    if (menu?.classList[1] === "_active" || btn?.classList[1] === "_active") {
        body.style.overflow = "hidden";
    } else {
        body.style.overflow = "unset";
    }
};
