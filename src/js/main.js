//меню
const buttomMobileMenu = document.querySelector('.firstb-menu');
const navigationMenu = document.querySelector('.burger-menu');
const navigationMenuCross = document.querySelector('.burger-btn')
const navigationMenuHide = document.querySelector('.menu-hidden')
buttomMobileMenu.addEventListener('click', () => {
    navigationMenuHide.classList.toggle('burger-menu-hide')
    navigationMenuCross.classList.toggle('burger-menu-cross')
    navigationMenu.classList.toggle('activebur');
})

// язык lang-vector navigationMenuLang.classList.toggle('rotate-lang'); 
document.onclick = function (event){
    
    if (document.querySelector('.menu-lang').classList.value.indexOf('menu-lang-active')) {
        let allBlocks = document.querySelectorAll('.block-wtf')
        let tog = false
        allBlocks.forEach(item => {
            if (event.target === item) {
                tog = true
            }
        }) 
        if (tog) {
            
            return
        }
        document.querySelector('.menu-lang').classList.remove('menu-lang-active') 
        document.querySelector('.lang-vector').classList.remove('rotate-lang')
    }
        
    
}

const buttomMobileMenuLang = document.querySelector('.firstb-lang');
const navigationMenuLang = document.querySelector('.menu-lang');
const rotateMenuLang = document.querySelector('.lang-vector');
buttomMobileMenuLang.addEventListener('click', () => {
    setTimeout(() => {
        navigationMenuLang.classList.toggle('menu-lang-active');
        rotateMenuLang.classList.toggle('rotate-lang'); 
    })     
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

const anchors = document.querySelectorAll('a[href*="#"]')

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
}

//documents
const CardsCertificates = document.querySelectorAll('.documents-cards-certificates');
const ContentTitleLeft = document.querySelectorAll('.documented-content-title-left');

const CardsCertificatesActive = (index) => {
    CardsCertificates.forEach((elem) => {
        elem.classList.remove('documents-cards-certificates-active');
    });
    CardsCertificates[index].classList.add('documents-cards-certificates-active');

    ContentTitleLeft.forEach((elem) => {
        elem.classList.remove('documented-content-title-left-active');
    });
    ContentTitleLeft[index].classList.add('documented-content-title-left-active');
};

//customers
const CustomersContent = document.querySelectorAll('.customers-content-hidden');
const CustomersContentTitle = document.querySelectorAll('.customers-content-title-left');

const CustomersContentActive = (index) => {
    CustomersContent.forEach((elem) => {
        elem.classList.remove('customers-content-active');
    });
    CustomersContent[index].classList.add('customers-content-active');

    CustomersContentTitle.forEach((elem) => {
        elem.classList.remove('customers-content-title-left-active');
    });
    CustomersContentTitle[index].classList.add('customers-content-title-left-active')
};

//+-контент в serm
document.querySelectorAll('.serm-faq-card-trigger').forEach((item) =>
    item.addEventListener('click', () => {
        const parent = item.parentNode;
        
        parent.classList.toggle('serm-faq-card-active')
    })
)
