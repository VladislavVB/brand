

let scrollToggle = false
let switchMenuColor = (height) => {
    if(height > 250) {
        document.querySelector('.menu').classList.add('body-menu-active')
    } else { 
        if(scrollToggle) {
            document.querySelector('.menu').classList.add('body-menu-active');
            return;
        }
        document.querySelector('.menu').classList.remove('body-menu-active');
    }
}
switchMenuColor($(window).scrollTop())
const burgerMenu = document.querySelector('.firstb-menu');
const buegerMunuSecond = document.querySelector('.menu');


burgerMenu.addEventListener('click', () => {
    setTimeout(() => {
        if (scrollToggle) {
           $('body').css('overflow','auto');
           scrollToggle = false;
        } else {
            $('body').css('overflow','hidden');
            scrollToggle = true;
        }
        switchMenuColor($(window).scrollTop())
        
    })     
})

//логотип
let logoSwipe = (position) => {
    
    if (position > 250) {
        document.querySelector('.menu-big-logo').style.width = 'none';
        document.querySelector('.menu-big-logo').style.transitionDuration = '0.5s';
    };
    // if (position > 300) {
    //     document.querySelector('.menu-big-logo').style.width = '80%';
    //     document.querySelector('.menu-big-logo').style.transitionDuration = '0.5s';
    // };
    // if (position > 360) {
    //     document.querySelector('.menu-big-logo').style.width = '70%';
    //     document.querySelector('.menu-big-logo').style.transitionDuration = '0.5s';
    // };
    // if (position > 410) {
    //     document.querySelector('.menu-big-logo').style.width = '60%';
    //     document.querySelector('.menu-big-logo').style.transitionDuration = '0.5s';
    // };
    // if (position > 460) {
    //     document.querySelector('.menu-big-logo').style.width = '30%';
    //     document.querySelector('.menu-big-logo').style.transitionDuration = '0.5s';
    // };
    // if (position > 390) {
    //     document.querySelector('.menu-big-logo').style.width = '50%';
    //     document.querySelector('.menu-big-logo').style.transitionDuration = '0.5s';
    // };
    // if (position > 440) {
    //     document.querySelector('.menu-big-logo').style.display = 'none';
    //     document.querySelector('.menu-big-logo').style.transitionDuration = '0.5s';
    // };
    if (position < 250) {
        document.querySelector('.menu-big-logo').style.display = 'block';
        document.querySelector('.menu-big-logo').style.transitionDuration = '0.5s';
    };
    // if (position < 280) {
    //     document.querySelector('.menu-big-logo').style.width = '100%';
    //     document.querySelector('.menu-big-logo').style.transitionDuration = '0.5s';
    // };
};



$(function() {
    $(window).on("scroll", function() {
       switchMenuColor($(window).scrollTop());
       logoSwipe($(window).scrollTop());
    });
});

