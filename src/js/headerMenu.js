$(document).ready(function () {
    let scrollToggle = false
    let switchMenuColor = (height) => {
        if (height > 250) {
            document.querySelector('.menu').classList.add('body-menu-active')
        } else {
            if (scrollToggle) {
                document.querySelector('.menu').classList.add('body-menu-active');
                return;
            }
            document.querySelector('.menu').classList.remove('body-menu-active');
        }
    }
    switchMenuColor($(window).scrollTop())
    const burgerMenu = document.querySelector('.firstb-menu');
    const buegerMunuSecond = document.querySelector('.menu');
    window.addEventListener('scroll', function (e) {
        if ($(window).scrollTop() > 50 ) {
            e.preventDefault();
        };
        
    });


    burgerMenu.addEventListener('click', () => {
        setTimeout(() => {
            if (scrollToggle) {
                // $('body').css('overflow', 'auto');
                // $('body').css('padding-right', 0);
                scrollToggle = false;
            } else {
                // $('body').css('overflow', 'hidden');
                // $('body').css('padding-right', 17);
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

        if (position < 250) {
            document.querySelector('.menu-big-logo').style.display = 'block';
            document.querySelector('.menu-big-logo').style.transitionDuration = '0.5s';
        };

    };



    $(function () {
        $(window).on("scroll", function () {
            switchMenuColor($(window).scrollTop());
            logoSwipe($(window).scrollTop());
        });
    });

});