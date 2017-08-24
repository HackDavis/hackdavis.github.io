$(function() {
    // in milliseconds
    const slow = 1000000;
    const fast = slow / 10;
    const slower = slow / 2;
    function animate() {
        this.css("left", this.start);
        this.velocity({left: (Number(this.start.slice(0, -2)) + window.innerWidth) + "px"}, {duration: this.duration, easing:"linear", complete: animate.bind(this)});
        this.start = -this.width() + "px";
    }
    var leftcloud1 = $("#left-cloud1");
    var leftcloud2 = $("#left-cloud2");
    var leftcloud3 = $("#left-cloud3");
    var leftcloud4 = $("#left-cloud4");
    var leftcloud5 = $("#left-cloud5");
    var leftcloud6 = $("#left-cloud6");
    var leftcloud7 = $("#left-cloud7");
    var leftcloud8 = $("#left-cloud8");
    var leftcloud9 = $("#left-cloud9");
    var leftcloud10 = $("#left-cloud10");

    leftcloud1.duration = slow;
    leftcloud2.duration = slower;
    leftcloud3.duration = fast;
    leftcloud4.duration = fast;
    leftcloud5.duration = slower;
    leftcloud6.duration = fast;
    leftcloud7.duration = fast;
    leftcloud8.duration = slower;
    leftcloud9.duration = fast;
    leftcloud10.duration = slow;

    leftcloud1.start = leftcloud1.css("left");
    leftcloud2.start = leftcloud2.css("left");
    leftcloud3.start = leftcloud3.css("left");
    leftcloud4.start = leftcloud4.css("left");
    leftcloud5.start = leftcloud5.css("left");
    leftcloud6.start = leftcloud6.css("left");
    leftcloud7.start = leftcloud7.css("left");
    leftcloud8.start = leftcloud8.css("left");
    leftcloud9.start = leftcloud9.css("left");
    leftcloud10.start = leftcloud10.css("left");
    
    animate.call(leftcloud1);
    animate.call(leftcloud2);
    animate.call(leftcloud3);
    animate.call(leftcloud4);
    animate.call(leftcloud5);
    animate.call(leftcloud6);
    animate.call(leftcloud7);
    animate.call(leftcloud8);
    animate.call(leftcloud9);
    animate.call(leftcloud10);
    
    /*var controller = new ScrollMagic.Controller();
    var poofLeftCloud = new ScrollMagic.Scene({
        offset:0,
        duration: 150
    })
    .setTween("#left-cloud1", {left: "-200px"})
    .addTo(controller);
    var poofRightCloud = new ScrollMagic.Scene({
        offset:200,
        duration:300
    })
    .setTween("#right-cloud1", {right: "-200px"})
    .addTo(controller);
    var poofLeftCloud2 = new ScrollMagic.Scene({
        offset:500,
        duration: 300
    })
    .setTween("#left-cloud2", {left: "-200px"})
    .addTo(controller);
    var poofRightCloud2 = new ScrollMagic.Scene({
        offset:800,
        duration: 300
    })
    .setTween("#right-cloud2", {right: "-200px"})
    .addTo(controller);
    var poofLeftCloud3 = new ScrollMagic.Scene({
        offset:1100,
        duration: 300
    })
    .setTween("#left-cloud3", {left: "-200px"})
    .addTo(controller);*/
});