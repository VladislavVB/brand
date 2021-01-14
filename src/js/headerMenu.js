$(function() {
    $(window).on("scroll", function() {

        console.log($(window).scrollTop());

        if($(window).scrollTop() > 906) {
            $(".menu-balck").css("color", "#1e1e1e")
            $(".menu-balck-svg").css("fill", "#1e1e1e")
            $(".menu-balck-svg").css("stroke", "#1e1e1e")
            $(".menu-balck-svg").css("viewBox", "#1e1e1e")
            $(".balck-vector").css("fill", "#1e1e1e")
            $(".balck-vector").css("stroke", "#1e1e1e")
            $(".balck-vector").css("rect", "#1e1e1e")
            $(".menu-secondb").css("opacity", "1")
            $(".menu").addClass("menu-active");  
        } else {
            toggleCollor = true
            $(".menu-balck").css("color", "white")
            $(".menu-balck-svg").css("fill", "white")
            $(".menu-balck-svg").css("stroke", "white")
            $(".balck-vector").css("fill", "white") 
            $(".balck-vector").css("stroke", "white")
            $(".menu-secondb").css("opacity", "0")
            $(".menu").removeClass("menu-active");  
        }
    });

    let toggle = false;
    let toggleCollor = false;

    $(".menu-click").click(function() {
        console.log($(".menu-active"));
        if (!toggle){
            if (toggleCollor) {
                return
            } 
            $(".menu-balck").css("color", "#1e1e1e")
            $(".menu-balck-svg").css("fill", "#1e1e1e")
            $(".menu-balck-svg").css("stroke", "#1e1e1e")
            $(".balck-vector").css("fill", "#1e1e1e") 
            $(".balck-vector").css("stroke", "#1e1e1e")
            $(".menu-secondb").css("opacity", "1")
            $(".menu").removeClass("menu-active");  
            toggle = true
        } else {
            
            $(".menu-balck").css("color", "white")
            $(".menu-balck-svg").css("fill", "white")
            $(".menu-balck-svg").css("stroke", "white")
            $(".balck-vector").css("fill", "white") 
            $(".balck-vector").css("stroke", "white")
            $(".menu-secondb").css("opacity", "0")
            $(".menu").removeClass("menu-active");  
            toggle = false
        }
        
        
      });
    

});

