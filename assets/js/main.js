//Menu
const open = document.querySelector('#open-toggle');
const close = document.querySelector('#close-toggle')
const nav = document.querySelector('#nav-menu')
const navLink = document.querySelectorAll('.nav__link');

const menu = () => {
    if(open && nav) {
        open.addEventListener('click', () => {
            nav.classList.toggle('show')
            open.style.display = 'none'
            close.style.display = 'inline-block'
        })
    }
    
    if(close && nav) {
        close.addEventListener('click', () => {
            nav.classList.remove('show')
            close.style.display = 'none'
            open.style.display = 'inline-block'
        })
    }

};
menu()

const linkAction = () => {
    nav.classList.remove('show')
    close.style.display = 'none'
    open.style.display = 'inline-block'
}
navLink.forEach(headerNav => headerNav.addEventListener('click', linkAction));


//Navbar color
window.onscroll = () => {
    const nav = document.getElementById('header');

    if(this.scrollY >= 100) nav.classList.add('scroll-header');
    else nav.classList.remove('scroll-header');
}


//Scroll page
const headerNav = document.querySelectorAll('.nav__menu ul li a[href^="#"]');

headerNav.forEach(i => {
    i.addEventListener('click', scrollOnClick);
});

function scrollOnClick(e) {
    e.preventDefault();
    const to = scrollToHref(e.target) -60;

    scrollToPosition(to);
};

function scrollToPosition(to) {
    window.scroll({
        top: to,
        behavior: "smooth",
    });
};

function scrollToHref(element) {
    const id = element.getAttribute('href');
    return document.querySelector(id).offsetTop;
};









