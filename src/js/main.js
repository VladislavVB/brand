const buttomMobileMenu = document.querySelector('.firstb-menu');
const navigationMenu = document.querySelector('.burger-menu');
buttomMobileMenu.addEventListener('click', () => {
    navigationMenu.classList.toggle('activebur');
})