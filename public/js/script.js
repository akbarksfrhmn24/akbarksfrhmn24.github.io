// navbar
const header = document.querySelector('header');
window.addEventListener('scroll', function() {
    if(this.window.scrollY > 1) {
        header.classList.replace('absolute', 'navbar-fixed')
    }else if(this.window.scrollY <= 0) {
        header.classList.replace('navbar-fixed', 'absolute')
    };
});

// Hamburger

const Hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

Hamburger.addEventListener('click', function(){
    Hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
});