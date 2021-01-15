//меню
const buttomMobileMenu = document.querySelector('.firstb-menu');
const navigationMenu = document.querySelector('.burger-menu');
buttomMobileMenu.addEventListener('click', () => {

    navigationMenu.classList.toggle('activebur');
})
//язык lang-vector navigationMenuLang.classList.toggle('rotate-lang'); 
const buttomMobileMenuLang = document.querySelector('.firstb-lang');
const navigationMenuLang = document.querySelector('.menu-lang');
const rotateMenuLang = document.querySelector('.lang-vector');
buttomMobileMenuLang.addEventListener('click', () => {
    navigationMenuLang.classList.toggle('menu-lang-active');
    rotateMenuLang.classList.toggle('rotate-lang'); 
})
//показать/скрыть новости hidden-card-all
let toggleAll = false
const showAllCards = () => {
    
    if (!toggleAll) {
        document.querySelectorAll('.hidden-card-all').forEach((elem)  => {
            elem.classList.remove('hidden-card-all')
        })   
        toggleAll = true
    } else {
        console.log(toggleAll);
        toggleAll = false
        document.querySelectorAll('.show-card-all').forEach((elem)  => { 
            console.log(elem);
            elem.classList.add('hidden-card-all')
        }) 
    }
}

//"отправка формы"
let sendSuccess = () => {
    document.querySelector('.form-img-success').classList.add('form-img-success-active');
    document.querySelector('.form-form').classList.add('form-form-none');
}