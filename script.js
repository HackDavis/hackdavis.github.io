$(document).ready(function (){
    $("#clickSponsors > a").click(function (){
            $('html, body').animate({
                scrollTop: $(document).height()
            }, 500);
    });

    $("#clickStories > a").click(function (){
            $('html, body').animate({
                scrollTop: $(".stories").offset().top
            }, 500);
    });

    $("#clickHome > a").click(function (){
            $('html, body').animate({
                scrollTop: $("body").offset().top
            }, 500);
    });

});