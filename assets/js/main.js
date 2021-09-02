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
const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
    navMenu.classList.remove("show-menu");
}
navLink.forEach(n => n.addEventListener("click", linkAction));

/*================= ACCORDION SKILLS =================*/
const skillsContent = document.getElementsByClassName('skills__content')
const skillsHeader = document.querySelectorAll('.skills__header')

function toggleSkills() {
    let itemClass = this.parentNode.className

    for (i = 0; i < skillsContent.length; i++) {
        skillsContent[i].className = 'skills__content skills__close'
    }
    if (itemClass === 'skills__content skills__close') {
        this.parentNode.className = 'skills__content skills__open'
    }
}

skillsHeader.forEach((el) => {
    el.addEventListener('click', toggleSkills)
})
/*================= QUALIFICATION TABS =================*/
const tabs = document.querySelectorAll('[data-target]'),
    tabContents = document.querySelectorAll('[data-content]')

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.target)

        tabContents.forEach(tabContents => {
            tabContents.classList.remove('qualification__active')
        })
        target.classList.add('qualification__active')

        tab.forEach(tab => {
            tab.classList.remove('qualification__active')
        })
        tab.classList.add('qualification__active')
    })
})
/*================= SERVICES MODAL =================*/
const modalViews = document.querySelectorAll('.services__modal')
const modalBtns = document.querySelectorAll('.services__button')
const modalCloses = document.querySelectorAll('.services__modal-close')

let modal = function (modalClick) {
    modalViews[modalClick].classList.add('active-modal')
}

modalBtns.forEach((modalBtns, i) => {
    modalBtns.addEventListener('click', () => {
        modal(i)
    })
})

modalCloses.forEach((modalCloses) => {
    modalCloses.addEventListener('click', () => {
        modalViews.forEach((modalView) => {
            modalView.classList.remove('active-modal')
        })
    })
})
/*================= PORTFOLIO SWIPER =================*/
let swiperPortfolio = new Swiper(".portfolio__container", {
    cssMode: true,
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});
/*================= TESTIMONIAL =================*/
let swiperTestimonial = new Swiper(".testimonial__container", {
    loop: true,
    grabCursor: true,
    spaceBetween: 48,

    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
    },
    breakpoints: {
        568: {
            slidesPerView: 2,
        }
    }
});
/*================= SCROLL SECTION ACTIVE LINK =================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive() {
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        } else {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }

        window.addEventListener('scroll',scrollActive)
    })
}
/*================= CHANGE BACKGROUND HEADER =================*/
function scrollHeader(){
    const nav = document.getElementById('header')
    //if scroll >= 80 viewport -> scroll-header class will added to header tag
    if(this.scrollY >= 80) nav.classList.add('scroll-header');
    else nav.classList.remove('scroll-header')
}

window.addEventListener('scroll',scrollHeader)
/*================= SHOW SCROLL UP =================*/
function scrollUp(){
    const scrollUp =  document.getElementById('scroll-up');

    if(this.scrollY >= 560) scrollUp.classList.add('show-scroll');
    else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll',scrollUp)
/*================= DARK LIGHT THEME =================*/