var controller = new ScrollMagic.Controller();

var tween = new TimelineMax()
.add([
  TweenMax.to(".layer1", 1, {y: "+=60", ease: Linear.easeNone}),
  TweenMax.to(".layer2", 1, {y: "+=100", ease: Linear.easeNone}),
  TweenMax.to(".layer3", 1, {y: "+=150", ease: Linear.easeNone}),
  TweenMax.to(".layer4", 1, {y: "-=300", ease: Linear.easeNone}),
  TweenMax.to(".logo", 1, {y: "+=250", ease: Linear.easeNone}),
]);

// build scene
var scene = new ScrollMagic.Scene({offset: 0, duration: 300})
        .setTween(tween)
        .addIndicators()
        .addTo(controller);

// define a new scroll position modification function (jQuery animate instead of jump)
controller.scrollTo(function (newScrollPos) {
    $(window).animate({scrollTop: newScrollPos});
});


$("#clickAbout").click(function(){
  $("#about-text").velocity("scroll", {offset: -230, duration: 1500, easing:"easeInOutCubic"});
})
