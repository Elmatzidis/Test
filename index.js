const menu = document.querySelector(".menu");
const btn = document.getElementById("menu-btn");

btn.addEventListener("click", navToggle);

function navToggle() {
    btn.classList.toggle("open");
    menu.classList.toggle("show-menu");
}