let swiper = new Swiper('.swiper-container', {
    pagination: {
        el: '.swiper-pagination',
        type: 'fraction',
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    slidesPerView: 4,
    spaceBetween: 10,
    breakpoints: {
        700: {
            slidesPerView: 4,
            spaceBetween: 10
        },
        500: {
            slidesPerView: 3,
            spaceBetween: 30
        },
        // 577: {
        //     slidesPerView: 2,
        //     spaceBetween: 10
        // },
        // 100: {
        //     slidesPerView: 1,
        //     spaceBetween: 10
        // }
    }
});