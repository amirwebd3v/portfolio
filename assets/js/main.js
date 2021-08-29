/*================= SHOW/HIDDEN MENU =================*/
const navMenu = document.getElementById("nav-menu");
const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");

/*================= SHOW MENU =================*/
/* Validate if constant exist */
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

/*================= HIDDEN MENU =================*/
/* Validate if constant exist */
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/*================= DISAPPEAR MOBILE MENU =================*/
const navLink = document.querySelectorAll("nav__link");

function linkAction() {
  navMenu.classList.remove("show-menu");
}
navLink.forEach(n => n.addEventListener("click", linkAction));

/*================= ACCORDION SKILLS =================*/

/*================= QUALIFICATION TABS =================*/

/*================= SERVICES MODAL =================*/
