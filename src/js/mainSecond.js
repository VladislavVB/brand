//customers
const CustomersContent = document.querySelectorAll('.customers-content-hidden');
const CustomersContentTitle = document.querySelectorAll('.customers-content-title-left');
const customersContentTabShowSm = document.querySelector('.customers-content-tab-show-sm');
const customersContentTitles = document.querySelector('.customers-content-titles');
const opacityContent = document.querySelector('.opacity-content');
const opacityContentActive = document.querySelector('.opacity-content-active');
const body = document.querySelector('body');
let closeToggle = true;

const CustomersContentActive = (index, title) => {
    CustomersContent.forEach((elem) => {
        elem.classList.remove('customers-content-active');
    });
    CustomersContent[index].classList.add('customers-content-active');

    CustomersContentTitle.forEach((elem) => {
        elem.classList.remove('customers-content-title-left-active');
    });

    CustomersContentTitle[index].classList.add('customers-content-title-left-active');
    customersContentTabShowSm.innerHTML = title;
    console.log(2);
    body.style.overflow = 'auto';
    customersContentTabShowSm.classList.toggle('customers-content-tab-show-sm-active');
    customersContentTitles.classList.toggle('customers-content-titles-active');
    opacityContent.classList.toggle('opacity-content-active');
};

customersContentTabShowSm.addEventListener('click', () => {
    opacityContent.classList.toggle('opacity-content-active');
    console.log(3);
    if(closeToggle){
        body.style.overflow = 'hidden';
        closeToggle = false;
    } else {
        body.style.overflow = 'auto';
        closeToggle = true;
    }
    
    const opacityContentActive = document.querySelector('.opacity-content-active');
    if (opacityContentActive) {
        opacityContentActive.addEventListener('click', () => {
            opacityContent.classList.remove('opacity-content-active');
            console.log(1);
            body.style.overflow = 'auto';
            customersContentTitles.classList.remove('customers-content-titles-active');
            customersContentTabShowSm.classList.remove('customers-content-tab-show-sm-active');
        });
    };
    customersContentTitles.classList.toggle('customers-content-titles-active');
    customersContentTabShowSm.classList.toggle('customers-content-tab-show-sm-active');
});

