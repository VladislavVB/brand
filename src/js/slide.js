var swiperSponsors = new Swiper('.swiper-container-sponsor', {
    slidesPerView: 4,
    spaceBetween: 30,
    pagination: {
        el: '.swiper-pagination-sponsor',
        type: 'fraction',
    },
    navigation: {   
        nextEl: '.swiper-button-next-sponsor',
        prevEl: '.swiper-button-prev-sponsor',
    },
});

var swiperCustomers = new Swiper('.swiper-container-customers', {
    slidesPerView: 1,
    simulateTouch: false,
    pagination: {
        el: '.swiper-pagination-customers',
        type: 'fraction',
    },
    navigation: {   
        nextEl: '.swiper-button-next-customers',
        prevEl: '.swiper-button-prev-customers',
    },
});
// var swiperCustomers = new Swiper('.swiper-container-customers', {
//     slidesPerView: 1,
//     
//     pagination: {
//         el: '.swiper-pagination-customers',
//         type: 'fraction',
//     },
//     navigation: {
//         nextEl: '.swiper-button-next-customers',
//         prevEl: '.swiper-button-prev-customers',
//     },
// });


