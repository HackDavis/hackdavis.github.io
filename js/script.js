$(document).ready(function() {
    var stickyNavTop = $('.nav').offset().top;
     
    var stickyNav = function(){
        var scrollTop = $(window).scrollTop();
              
        var el = document.getElementById("line");


        if (scrollTop > stickyNavTop) { 
            $('.nav').addClass('sticky');
            el.style.opacity = 1.0
        } else {
            $('.nav').removeClass('sticky'); 
            el.style.opacity = 0.0
        }
    };
     
    stickyNav();
     
    $(window).scroll(function() {
        stickyNav();
    });
});

$(document).ready(function (){
    $("#clickSponsors").click(function (){
        console.log($(".FAQ").offset().top);
            $('html, body').animate({
                scrollTop: $(".Sponsorship").offset().top - 120
            }, 500);
    });
    $("#clickFaq").click(function (){
            $('html, body').animate({
                scrollTop: $(".FAQ").offset().top - 120
            }, 500);
    });
    $("#clickAbout").click(function (){
            $('html, body').animate({
                scrollTop: $(".About").offset().top - 120
            }, 500);
    });
    $("#clickHome").click(function (){
            $('html, body').animate({
                scrollTop: $("body").offset().top
            }, 500);
    });

});