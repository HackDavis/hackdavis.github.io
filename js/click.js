const hamburger = $("#hamburger-menu");
const children = $("#nav").children();
const length = children.length;
let active = false;

hamburger.on("click", function(e) {
  hamburger.toggleClass("is-active");
  hamburger.attr('disabled', 'disabled');
  active = !active;

  (function fade(i) {
    active ? element = children[length - i] : element = children[i - 1];
    $(element).fadeToggle(25, function(){
      if (--i) fade(i);  //Decrement
      else hamburger.removeAttr('disabled'); //Reenable when animation is finished
    });
   })(length);
});
