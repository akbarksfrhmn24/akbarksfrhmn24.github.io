// navbar
const header = document.querySelector('header');
const toTop = document.querySelector('#to-top');

window.addEventListener('scroll', function() {
    if(this.window.scrollY > 1) {
        header.classList.replace('absolute', 'navbar-fixed')
        toTop.classList.replace('hidden', 'flex')
    }else if(this.window.scrollY <= 0) {
        header.classList.replace('navbar-fixed', 'absolute')
        toTop.classList.replace('flex', 'hidden')
    };
});

// Hamburger

const Hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

Hamburger.addEventListener('click', function(){
    Hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
});

// Klik luar Hamburger
window.addEventListener('click', function(e) {
    if(e.target != Hamburger && e.target != navMenu) {
        Hamburger.classList.remove('hamburger-active');
        navMenu.classList.add('hidden');
    }
});

// darkMode
const darkToggle = document.querySelector('#dark-toggle');
const html = document.querySelector('html');

darkToggle.addEventListener('click', function () {
    if(darkToggle.checked) {
        html.classList.add('dark');
        localStorage.theme = 'dark';
    } else {
        html.classList.remove('dark');
        localStorage.theme = 'light';
    }
});

// fix toggle dark
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    darkToggle.checked = true;
} else {
    darkToggle.checked = false;
}