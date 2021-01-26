let scrollToggle = false
let switchMenuColor = (height) => {
    if(height > 70) {
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

$(function() {
    $(window).on("scroll", function() {
       switchMenuColor($(window).scrollTop())
    });
});