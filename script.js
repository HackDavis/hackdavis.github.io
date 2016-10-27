$(document).ready(function (){
    $("#clickSponsors > a").click(function (){
        $('html, body').animate({
            scrollTop: $(".sponsors").offset().top
        }, 500);
    });

    $("#clickFAQ > a").click(function (){
        $('html, body').animate({
            scrollTop: $(".faq").offset().top
        }, 500);
    });

    $("#clickAbout > a").click(function (){
        $('html, body').animate({
            scrollTop: $(".about").offset().top
        }, 500);
    });

    $("#clickHome > a").click(function (){
        $('html, body').animate({
            scrollTop: $("body").offset().top
        }, 500);
    });

    var interval = null;
    var counter = 0;    
    clearInterval(interval);
    
    // continuous rotation
    interval = setInterval(function(){
         counter -= 1;
         $(".heart-logo").css({
             MozTransform: 'rotate(-' + -counter + 'deg)',
             WebkitTransform: 'rotate(' + -counter + 'deg)',
             transform: 'rotate(' + -counter + 'deg)'
         });
    }, 50);

});