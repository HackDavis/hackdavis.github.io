var controller;

function enableParallax() {
  if(window.innerWidth > 750 && window.innerWidth > window.innerHeight && !controller) {
    controller = new ScrollMagic.Controller();

    var tween = new TimelineMax()
    .add([
      TweenMax.to(".clouds", 1, {y: "+=635", ease: Linear.easeNone}),
      TweenMax.to(".mountains", 1, {y: "+=700", ease: Linear.easeNone}),
      TweenMax.to(".sky", 1, {y: "+=700", ease: Linear.easeNone}),
      TweenMax.to(".road", 1, {y: "+=450", ease: Linear.easeNone}),
      TweenMax.to(".cow", 1, {y: "+=100", ease: Linear.easeNone}),
      TweenMax.to(".logo", 1, {y: "+=550", ease: Linear.easeNone}),
      TweenMax.from("object[data='img/soil.svg']", 1, {y: "-=100", ease: Linear.easeNone})
    ]);

    // build scene
    var scene = new ScrollMagic.Scene({offset: 0, duration: 600})
            .setTween(tween)
            .addIndicators()
            .addTo(controller);

    var caveScene = new ScrollMagic.Scene({triggerElement: '.caveBackground', duration: 1 * window.innerHeight})
            .setTween(TweenMax.fromTo(".caveBackground", 1, {y: "-=200"}, {y: "+=400", ease: Linear.easeNone}))
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
  if(window.innerHeight > window.innerWidth || window.innerWidth <= 750){
    if(controller) {
      controller.destroy(true);
      controller = null;
      $('object, .logo').each(function(){
        $(this).removeAttr('style');
      })
    }
  } else {
    //In Landscape
    enableParallax();
  }
});

/*Navbar links*/
let duration = 1500;
$("#clickAbout").click(function(){
  $("#about-text").velocity("scroll", {offset: -230, duration: duration, easing:"easeInOutCubic"});
});
$("#clickSchedule").click(function(){
  $("#schedule").velocity("scroll", {offset: -150, duration: duration, easing: "easeInOutCubic"});
});
$("#clickSponsors").click(function(){
  $("footer").velocity("scroll", {offset: -100, duration: duration, easing: "easeInOutCubic"});
});
$("#clickFAQ").click(function(){
  $("#FAQ").velocity("scroll", {offset: -150, duration: duration, easing: "easeInOutCubic"});
});
