var controller;
var state;
var sBrowser, sUsrAg = navigator.userAgent;
if(sUsrAg.indexOf("Chrome") > -1) {
  sBrowser = "Google Chrome";
} else if (sUsrAg.indexOf("Safari") > -1) {
  sBrowser = "Apple Safari";
} else if (sUsrAg.indexOf("Opera") > -1) {
  sBrowser = "Opera";
} else if (sUsrAg.indexOf("Firefox") > -1) {
  sBrowser = "Mozilla Firefox";
}
Waves.attach("#close", ['waves-circle']);
Waves.init();
function enableParallax() {
  if(window.innerWidth > 750 && !controller) {
    controller = new ScrollMagic.Controller();
    state = "tablet";
    if(window.innerWidth > window.innerHeight) {
      state = "full";
      /*var grassTween = new TimelineMax()
      .add([
        //TweenMax.to(".mountains", 1, {y: "+=550", ease: Linear.easeNone}), Fixed for now
        TweenMax.to(".road", 1, {y: "+=400", ease: Linear.easeNone}),
        TweenMax.to(".cow", 1, {y: "+=100", ease: Linear.easeNone}),
        TweenMax.to(".logo", 1, {y: "+=500", ease: Linear.easeNone}),
        TweenMax.from("#soil", 1, {"margin-top": "-100px", ease: Linear.easeNone})
      ]);

      // build scene
      */
      var grassScene = new ScrollMagic.Scene({offset: 0, duration: 600})
      //        .setTween(grassTween)
              .on('leave', function(){
                $("#mlh-trust-badge").toggle(false);
              })
              .on('enter', function(){
                $("#mlh-trust-badge").toggle(true);                
              })
              .addTo(controller);
      /*
      var caveTween = new TimelineMax()
      .add([
        TweenMax.fromTo("#cave2", 1, {y: "-=100"}, {y: "+=150", ease: Linear.easeNone}),
        TweenMax.fromTo("#cave3", 1, {y: "-=200"}, {y: "+=250", ease: Linear.easeNone}),
        TweenMax.fromTo("#cave4", 1, {y: "-=300"}, {y: "+=350", ease: Linear.easeNone}),
      ]);
      var caveScene = new ScrollMagic.Scene({triggerElement: 'img[src="img/front cave.png"]', offset: 50, duration: 1.5 * window.innerHeight})
              .setTween(caveTween)
              .addTo(controller);

      var lanternTween = new TimelineMax()
      .add([
          TweenMax.to("#lantern", 1, {y: "+=200", ease: Linear.easeNone}),
          TweenMax.to("#lantern-img", 1, {y: "+=200", ease: Linear.easeNone})
        ]);

      var lanternFollow = new ScrollMagic.Scene({triggerElement: 'img[src="img/front cave.png"]', offset: 600, duration: 300})
              .setTween(lanternTween)
              .addTo(controller);
      */
    }
    //Underground nav color change
    let nav = document.getElementById('nav');
    var navColorChange = new ScrollMagic.Scene({triggerElement: "img[src='img/front cave.png']", duration: 0})
					.on("enter", function() {
            $("#rearNav").toggleClass("opaque", true);
					})
          .on("leave", function() {
            $("#rearNav").toggleClass("opaque", false);
					})
					.addTo(controller);
  }
  else if(window.innerWidth <= 750) {
    //Change image in mobile site
    state = "mobile";
  }
}
enableParallax();

//Turns parallax off when switching orientation on tablet
$(window).resize(function(event) {
  //In Portrait
  if((window.innerHeight > window.innerWidth && state == "full") || (window.innerWidth <= 750 && state != "mobile") || (window.innerWidth > window.innerHeight && window.innerWidth > 750 && state != "full")) {
    if(controller) {
      controller.destroy(true);
      controller = null;
      $('object, .logo').each(function(){
        $(this).removeAttr('style');
      })
    }
    enableParallax();
  }
});

/* Navbar links */
let duration = 1500;
$("#click2017").click(function(){
  $(this).children()[0].click();
})
$("#clickAbout").click(function(){
  $("#about-text").velocity("scroll", {offset: -230, duration: duration, easing:"easeInOutCubic"});
});
$("#clickSchedule").click(function(){
  $("#schedule").velocity("scroll", {offset: -150, duration: duration, easing: "easeInOutCubic"});
});
$("#clickSponsors").click(function(){
  $("footer").velocity("scroll", {offset: -50, duration: duration, easing: "easeInOutCubic"});
});
$("#clickFAQ").click(function(){
  $("#FAQ").velocity("scroll", {offset: -150, duration: duration, easing: "easeInOutCubic"});
});
var closeTimeout;
/* Apply button */
$("#lantern,#apply-button").click(function(){
  if(window.innerWidth <= 750 && sBrowser == 'Mozilla Firefox') {
    window.location.href="./apply.html";
  }
  if(closeTimeout)
  {
    clearInterval(closeTimeout);
    closeTimeout = null;
  }
  $("#typeform,#close").show();
  $('html').css('overflow', 'hidden');
  $("#close").transition({top: '10px'});
  $('#typeform').transition({top: 0});
});
$("#close").click(function(){
  $("#close").transition({top: "100%"});
  $("#typeform").transition({top: "100%"});
  $("html").removeAttr("style");
  if(closeTimeout) {
    clearInterval(closeTimeout);
  }
  closeTimeout = setTimeout(function() {
    $("#typeform,#close").hide();
  }, 1000);
})
