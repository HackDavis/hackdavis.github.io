if(window.innerWidth > 700) {
  var controller = new ScrollMagic.Controller();

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

}
else {
  //Change image in mobile site
  $("object[data='img/cowandsquirrel.svg']").attr("data", "img/grass.svg");
}

$("#clickAbout").click(function(){
  $("#about-text").velocity("scroll", {offset: -230, duration: 1500, easing:"easeInOutCubic"});
})
