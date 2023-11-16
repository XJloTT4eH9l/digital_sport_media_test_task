const burger = document.querySelector('.burger-menu');
const mobileMenu = document.querySelector('.header__mobile-menu');
const overlay = document.querySelector('.overlay');
const burgerClose = document.querySelector('.header__close');

burger.addEventListener('click', () => {
    mobileMenu.classList.add('header__mobile-menu--active');
    overlay.classList.add('overlay--active');
    document.body.style.overflow = 'hidden';
});

overlay.addEventListener('click', () => {
    mobileMenu.classList.remove('header__mobile-menu--active');
    overlay.classList.remove('overlay--active');
    document.body.style.overflow = '';
});

burgerClose.addEventListener('click', () => {
    mobileMenu.classList.remove('header__mobile-menu--active');
    overlay.classList.remove('overlay--active');
    document.body.style.overflow = '';
});
