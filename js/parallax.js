$(function(){
  $("object").each(function(){
    this.addEventListener("load", function(){
      let drawing = this.contentDocument;
      drawing.querySelector("svg").setAttribute("preserveAspectRatio", "none");
    });
  })
})
var controller = new ScrollMagic.Controller();

var tween = new TimelineMax ()
.add([
  TweenMax.to(".img-absolute", 1, {top: "500px", ease: Linear.easeNone}),
]);

// build scene
var scene = new ScrollMagic.Scene({offset: 100, duration: $(window).width()})
        .setTween(tween)
        .addIndicators() // add indicators (requires plugin)
        .addTo(controller);
