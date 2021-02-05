let swiperSponsors = new Swiper('.swiper-container-sponsor', {
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
