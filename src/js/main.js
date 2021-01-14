//меню
const buttomMobileMenu = document.querySelector('.firstb-menu');
const navigationMenu = document.querySelector('.burger-menu');
buttomMobileMenu.addEventListener('click', () => {
    navigationMenu.classList.toggle('activebur');
})
//язык
const buttomMobileMenuLang = document.querySelector('.firstb-lang');
const navigationMenuLang = document.querySelector('.menu-lang');
buttomMobileMenuLang.addEventListener('click', () => {
    navigationMenuLang.classList.toggle('menu-lang-active');
})