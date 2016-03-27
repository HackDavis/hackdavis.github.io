$(document).ready(function() {
    var stickyNavTop = $('.nav').offset().top;
     
    var stickyNav = function(){
        var scrollTop = $(window).scrollTop();
              
        var el = document.getElementById("line");
        var nav = document.getElementById("nav");
        var brand = document.getElementById("brand")

        if (scrollTop > stickyNavTop) { 
            $('.nav').addClass('sticky');
            el.style.opacity = 1.0;
            brand.style.opacity = 1.0;
            nav.style.background = "rgba(255, 255, 255, .95)";
        } else {
            $('.nav').removeClass('sticky'); 
            el.style.opacity = 0.0;
            brand.style.opacity = 0.0;
            nav.style.background = "rgba(255, 255, 255, 1)";
        }
    };
     
    stickyNav();
     
    $(window).scroll(function() {
        stickyNav();
    });
});

$(document).ready(function (){
    $("#clickSponsors").click(function (){
            $('html, body').animate({
                scrollTop: $(".Sponsorship").offset().top - 80
            }, 500);
    });
    $("#clickSchedule").click(function (){
            $('html, body').animate({
                scrollTop: $(".Schedule").offset().top - 70
            }, 500);
    });
    $("#clickFaq").click(function (){
            $('html, body').animate({
                scrollTop: $(".FAQ").offset().top - 120
            }, 500);
    });
    $("#clickAbout").click(function (){
            $('html, body').animate({
                scrollTop: $(".About").offset().top - 80
            }, 500);
    });
    $("#clickHome").click(function (){
            $('html, body').animate({
                scrollTop: $("body").offset().top
            }, 500);
    });

});