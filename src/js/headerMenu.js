let scrollToggle = false
let switchMenuColor = (height) => {
    if(height > 906) {
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

// switchMenuColor()

// let toggle = false;

// let switchMenuColor = (height) => {
//     if(height > 906) {
//         $(".menu-balck").css("color", "#1e1e1e")
//         $(".menu-balck-svg").css("fill", "#1e1e1e")
//         $(".menu-balck-svg").css("stroke", "#1e1e1e")
//         $(".menu-balck-svg").css("viewBox", "#1e1e1e")
//         $(".balck-vector").css("fill", "#1e1e1e")
//         $(".balck-vector").css("stroke", "#1e1e1e")
//         $(".balck-vector").css("rect", "#1e1e1e")
//         $(".menu-secondb").css("opacity", "1")
//         $(".menu").addClass("menu-active");  
       
//     } else {
       
//         $(".menu-balck").css("color", "white")
//         $(".menu-balck-svg").css("fill", "white")
//         $(".menu-balck-svg").css("stroke", "white")
//         $(".balck-vector").css("fill", "white") 
//         $(".balck-vector").css("stroke", "white")
//         $(".menu-secondb").css("opacity", "0")
//         $(".menu").removeClass("menu-active");  
//     }
// }
// switchMenuColor($(window).scrollTop())



//     switchMenuColor = (height) => {
//         if(height > 906) {
//             document.querySelector('menu').classList.add('body-menu-active')
//         }
//     }
    

//     $(".menu-click").click(function() {
//         console.log($(".menu-active"));
//         if (!toggle){
            
            
//             $(".menu-balck").css("color", "#1e1e1e")
//             $(".menu-balck-svg").css("fill", "#1e1e1e")
//             $(".menu-balck-svg").css("stroke", "#1e1e1e")
//             $(".balck-vector").css("fill", "#1e1e1e") 
//             $(".balck-vector").css("stroke", "#1e1e1e")
//             $(".menu-secondb").css("opacity", "1")
//             $(".menu").removeClass("menu-active");  
//             toggle = true
//         } else {
//             $(".menu-balck-svg").css("stroke", "white")
//             $(".balck-vector").css("fill", "white") 
//             $(".balck-vector").css("stroke", "white")
//             $(".menu-balck").css("color", "white")
//             $(".menu-balck-svg").css("fill", "white")
//             $(".menu-secondb").css("opacity", "0")
//             $(".menu").removeClass("menu-active");  
//             switchMenuColor($(window).scrollTop())
//             toggle = false
//         }
        
//       });
    
// });



