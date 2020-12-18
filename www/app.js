const menubutton = document.querySelector(".menu-button")
const navmenu = document.querySelector(".nav-menu")
const menuitems = document.querySelectorAll(".nav-menu li")

menubutton.addEventListener("click", () => {
    navmenu.classList.toggle("open");
});