//меню
const buttomMobileMenu = document.querySelector('.firstb-menu');
const navigationMenu = document.querySelector('.burger-menu');
const navigationMenuCross = document.querySelector('.burger-btn');
const navigationMenuHide = document.querySelector('.menu-hidden');
const section = document.querySelectorAll('.section');
const footer = document.querySelector('.footer');
const bodySecond = document.querySelector('body');
const burgerMenu = document.querySelector('.burger-menu');
let closeHeadToggle = true;
let countScroll = 0;
buttomMobileMenu.addEventListener('click', () => {

    if (closeHeadToggle) {
        countScroll = window.scrollY;
        console.log(countScroll);
        closeHeadToggle = false;
    } else {
        setTimeout(() => {
            console.log(countScroll);
            window.scrollTo(0, countScroll);
            closeHeadToggle = true;
        },);
    };

    section.forEach(elem => {
        elem.classList.toggle('display-none-menu');
    });
    footer.classList.toggle('display-none-menu');

    navigationMenuHide.classList.toggle('burger-menu-hide');
    navigationMenuCross.classList.toggle('burger-menu-cross');
    navigationMenu.classList.toggle('activebur');

    bodySecond.style.overflow = 'auto';
});

// язык lang-vector 
document.onclick = function (event) {

    if (document.querySelector('.menu-lang').classList.value.indexOf('menu-lang-active')) {
        let allBlocks = document.querySelectorAll('.block-wtf');
        let tog = false;
        allBlocks.forEach(item => {
            if (event.target === item) {
                tog = true
            }
        })
        if (tog) {
            return;
        }
        document.querySelector('.menu-lang').classList.remove('menu-lang-active');
        document.querySelector('.lang-vector').classList.remove('rotate-lang');
    };


};

const buttomMobileMenuLang = document.querySelector('.firstb-lang');
const navigationMenuLang = document.querySelector('.menu-lang');
const rotateMenuLang = document.querySelector('.lang-vector');
buttomMobileMenuLang.addEventListener('click', () => {
    setTimeout(() => {
        navigationMenuLang.classList.toggle('menu-lang-active');
        rotateMenuLang.classList.toggle('rotate-lang');
    });
});


//показать/скрыть новости hidden-card-all
let toggleAll = false
const showAllCards = () => {

    if (!toggleAll) {
        document.querySelectorAll('.hidden-card-all').forEach((elem) => {
            elem.classList.remove('hidden-card-all')
        })
        toggleAll = true
    } else {
        console.log(toggleAll);
        toggleAll = false
        document.querySelectorAll('.show-card-all').forEach((elem) => {
            console.log(elem);
            elem.classList.add('hidden-card-all')
        })
    }
};

//"отправка формы"
let sendSuccess = () => {
    document.querySelector('.form-img-success').classList.add('form-img-success-active');
    document.querySelector('.form-form').classList.add('form-form-none');
};

const anchors = document.querySelectorAll('a[href*="#"]');

//плавный переход
for (let anchor of anchors) {
    anchor.addEventListener('click', function (e) {
        e.preventDefault()

        const blockID = anchor.getAttribute('href').substr(1)

        document.getElementById(blockID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    })
};




//+-контент в serm
document.querySelectorAll('.serm-faq-card-trigger').forEach((item) =>
    item.addEventListener('click', () => {
        const parent = item.parentNode;

        parent.classList.toggle('serm-faq-card-active')
    })
)

//countries
const countriesTitle = document.querySelectorAll('.countries-title');
const countriesList = document.querySelectorAll('.countries-list');

countriesTitle.forEach((elem, index) => {
    elem.addEventListener('click', () => {
        elem.classList.toggle('countries-title-active');
        countriesList[index].classList.toggle('countries-list-active');
    });
});

//menu
const burgerContentServices = document.querySelectorAll('.burger-content-services');
const burgerServicesRight = document.querySelectorAll('.burger-services-right');

burgerContentServices.forEach((elem, index) => {
    elem.addEventListener('click', () => {
        elem.classList.toggle('burger-content-services-active');
        burgerServicesRight[index].classList.toggle('burger-services-right-active');
    });
});

//contacts
const contactLeftTitle = document.querySelectorAll('.contact-left-title');
const advantageTabs = document.querySelectorAll('.advantage-tabs');

contactLeftTitle.forEach((elem, index) => {
    elem.addEventListener('click', () => {
        elem.classList.toggle('contact-left-title-active');
        advantageTabs[index].classList.toggle('advantage-tabs-active')
    });
});

//faq
const sermFaqCardTrigger = document.querySelectorAll('.serm-faq-card-trigger');
const sermFaqCardContent = document.querySelectorAll('.serm-faq-card-content');

sermFaqCardTrigger.forEach((elem, index) => {
    elem.addEventListener('click', () => {
        elem.classList.toggle('serm-faq-card-active');
        sermFaqCardContent[index].classList.toggle('serm-faq-card-content-active');
    });
});

//leadership
const leadershipCardSee = document.querySelector('.leadership-card-see');
const leadershipCardNoneSm = document.querySelectorAll('.leadership-card-none-sm');

let leadershipSee = () => {
    leadershipCardNoneSm.forEach((elem) => {
        elem.classList.toggle('leadership-card-none-sm-active')
    });
};


