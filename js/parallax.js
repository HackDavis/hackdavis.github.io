var controller;
function enableParallax() {
  if(window.innerWidth > 750 && window.innerWidth > window.innerHeight) {
    controller = new ScrollMagic.Controller();

    var tween = new TimelineMax()
    .add([
      TweenMax.to(".clouds", 1, {y: "+=635", ease: Linear.easeNone}),
      TweenMax.to(".mountains", 1, {y: "+=700", ease: Linear.easeNone}),
      TweenMax.to(".sky", 1, {y: "+=700", ease: Linear.easeNone}),
      TweenMax.to(".road", 1, {y: "+=450", ease: Linear.easeNone}),
      TweenMax.to(".cow", 1, {y: "+=100", ease: Linear.easeNone}),
      TweenMax.to(".logo", 1, {y: "+=550", ease: Linear.easeNone}),
    ]);

    // build scene
    var scene = new ScrollMagic.Scene({offset: 0, duration: 600})
            .setTween(tween)
            .addIndicators()
            .addTo(controller);

      // build scene
      var scene = new ScrollMagic.Scene({offset: 0, duration: 600})
              .setTween(tween)
              .addIndicators()
              .addTo(controller);
  }
  else if(window.innerWidth <= 750) {
    //Change image in mobile site
    $("object[data='img/cowandsquirrel.svg']").attr("data", "img/grass.svg");
  }
  else if(window.innerWidth > 750) {
    $("object[data='img/grass.svg']").attr("data", "img/cowandsquirrel.svg");
  }
}
enableParallax();

//Turns parallax off when switching orientation on tablet
$(window).resize(function(event) {
  //In Portrait
  if(window.innerWidth <=750) {
    //Change image in mobile site
    $("object[data='img/cowandsquirrel.svg']").attr("data", "img/grass.svg");
  }
  else if(window.innerWidth > 750) {
    $("object[data='img/grass.svg']").attr("data", "img/cowandsquirrel.svg");
  }
  if(window.innerHeight > window.innerWidth){
    if(controller) {
      controller.destroy(true);
      controller = null;
      $('object .logo').each(function(){
        $(this).removeAttr('style');
      })
    }
  } else {
    //In Landscape
    enableParallax();
  }
});

$("#clickAbout").click(function(){
  $("#about-text").velocity("scroll", {offset: -230, duration: 1500, easing:"easeInOutCubic"});
});
$("#clickSponsors").click(function(){
  $("footer").velocity("scroll", {offset: -100, duration: 1500, easing: "easeInOutCubic"});
});
