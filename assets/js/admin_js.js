/*================= DROPDOWN =================*/
document.querySelectorAll('.sidebar__submenu').forEach(el => {
    el.querySelector('.sidebar__menu-dropdown').onclick = (event) => {
        event.preventDefault()
        el.querySelector('.sidebar__menu-dropdown .dropdown__icon').classList.toggle('active')
        
        let dropdown_content = el.querySelector('.sidebar__menu-dropdown-content')
        let dropdown_content_lis = dropdown_content.querySelectorAll('li')

        let active_height = dropdown_content_lis[0].clientHeight * dropdown_content_lis.length
        
        dropdown_content.classList.toggle('active')

        dropdown_content.style.height = dropdown_content.classList.contains('active') ? active_height +
        'px' : '0'
    }
})



/*================= MOBILE TOGGLE OVERLAY =================*/
let overlay = document.querySelector('.overlay')
let sidebar = document.querySelector('.sidebar')

document.querySelector('#mobile-toggle').onclick = () => {
    sidebar.classList.toggle('active')
    overlay.classList.toggle('active')
}

document.querySelector('#sidebar-close').onclick = () => {
    sidebar.classList.toggle('active')
    overlay.classList.toggle('active')
}