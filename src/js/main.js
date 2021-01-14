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
//показать/скрыть новости
let allNews = () => {
    // document.querySelector('.form-img-success').classList.add('form-img-success-active');
    // document.querySelector('.form-form').classList.add('form-form-none');
}
//"отправка формы"
let sendSuccess = () => {
    document.querySelector('.form-img-success').classList.add('form-img-success-active');
    document.querySelector('.form-form').classList.add('form-form-none');
}