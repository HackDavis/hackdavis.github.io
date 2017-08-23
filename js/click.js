let hamburger = $("#hamburger-menu");
let active = false;

hamburger.on("click", function(e) {
  hamburger.toggleClass("is-active");
  hamburger.attr('disabled', 'disabled');
  active = !active;
  let children = $("#nav").children();
  let length = children.length;
  let element;
  (function fade(i) {
     setTimeout(function () {
       active ? element = children[length - i] : element = children[i - 1];
       $(element).fadeToggle("fast");
       if (--i) fade(i);  //Decrement
       else hamburger.removeAttr('disabled'); //Reenable when animation is finished
     }, 25)
   })(length);
  $("#nav").fadeToggle();
});
