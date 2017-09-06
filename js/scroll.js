$(function() {
    // in milliseconds
    function addShadow() {
        $("#balloon").attr("src", "img/hotairballoon_wshadow.svg");
    }
    function removeShadow() {
        $("#balloon").attr("src", "img/hotairballoon.svg");        
    }
    let balloonEM = parseInt($("#balloon").parent().css("font-size"), 10);
    var controller = new ScrollMagic.Controller();
    let guyFloatLeft = new ScrollMagic.Scene({
        offset: 0,
        duration: window.innerWidth * 80 / 100
    })
    .setTween("#balloon", {top: -5 * balloonEM + "px", ease: Linear.easeNone, left: window.innerWidth * 25 / 100 + "px"})
    .addTo(controller);

    let guyFloatRight = new ScrollMagic.Scene({
        offset: window.innerWidth * 100 / 100,
        duration: window.innerWidth * 120 / 100
    })
    .setTween("#balloon", {top: 5 * balloonEM + "px", ease: Linear.easeNone, left: window.innerWidth * 35 / 100 + "px"})
    .addTo(controller);

    let hoverA = new ScrollMagic.Scene({
        offset: window.innerWidth * 30 / 100,
        duration: window.innerWidth * 20 / 100
    })
    .addTo(controller);
    hoverA.on("enter", addShadow);
    hoverA.on("leave", removeShadow);

    let hoverRoad = new ScrollMagic.Scene({
        offset: window.innerWidth * 85 / 100,
        duration: window.innerWidth * 20 / 100
    })
    .addTo(controller);
    hoverRoad.on("enter", addShadow);
    hoverRoad.on("leave", removeShadow);
    /*let guyFloatLeft = new ScrollMagic.Scene({
        offset:window.innerWidth * 5 / 100,
        duration: window.innerWidth * 30 / 100
    })
    .setTween("#balloon", {left: window.innerWidth * 35 / 100 + "px", top: -25 * balloonEM + "px"})
    .addTo(controller);

    let guyFloatRight = new ScrollMagic.Scene({
        offset:window.innerWidth * 40 / 100,
        duration: window.innerWidth * 30 / 100
    })
    .setTween("#balloon", {left: window.innerWidth * 50 / 100 + "px", top: -15 * balloonEM + "px"})
    .addTo(controller);

    let guyFloatLeft2 = new ScrollMagic.Scene({
        offset:window.innerWidth * 65 / 100,
        duration: window.innerWidth * 20 / 100
    })
    .setTween("#balloon", {left: window.innerWidth * 35 / 100 + "px", top: -10 * balloonEM + "px"})
    .addTo(controller);

    let guyFloatRight2 = new ScrollMagic.Scene({
        offset:window.innerWidth * 85 / 100,
        duration: window.innerWidth * 20 / 100
    })
    .setTween("#balloon", {left: window.innerWidth * 65 / 100 + "px", top: 0 * balloonEM + "px"})
    .addTo(controller);*/

    const slow = 1000000;
    const fast = slow / 10;
    const slower = slow / 2;

    function animate() {
        this.css("left", this.start);
        this.velocity({left: (Number(this.start.slice(0, -2)) + window.innerWidth + this.width()) + "px"}, {duration: this.duration, easing:"linear", complete: animate.bind(this)});
        this.start = -this.width() + "px";
    }

    var cloud1 = $("#cloud1");
    var cloud2 = $("#cloud2");
    var cloud3 = $("#cloud3");
    var cloud4 = $("#cloud4");
    var cloud5 = $("#cloud5");
    var cloud6 = $("#cloud6");
    var cloud7 = $("#cloud7");
    var cloud8 = $("#cloud8");
    var cloud9 = $("#cloud9");
    var cloud10 = $("#cloud10");
    var cloud11 = $("#cloud11");
    var cloud12 = $("#cloud12");
    var cloud13 = $("#cloud13");
    var cloud14 = $("#cloud14");

    cloud1.duration = slow;
    cloud2.duration = slower;
    cloud3.duration = fast;
    cloud4.duration = slow;
    cloud5.duration = slower;
    cloud6.duration = fast;
    cloud7.duration = slow;
    cloud8.duration = slower;
    cloud9.duration = fast;
    cloud10.duration = slow;
    cloud11.duration = fast;
    cloud12.duration = slow;
    cloud13.duration = fast;
    cloud14.duration = slow;

    cloud1.start = cloud1.position().left + "px";
    cloud2.start = cloud2.position().left + "px";
    cloud3.start = cloud3.position().left + "px";
    cloud4.start = cloud4.position().left + "px";
    cloud5.start = cloud5.position().left + "px";
    cloud6.start = cloud6.position().left + "px";
    cloud7.start = cloud7.position().left + "px";
    cloud8.start = cloud8.position().left + "px";
    cloud9.start = cloud9.position().left + "px";
    cloud10.start = cloud10.position().left + "px";
    cloud11.start = cloud10.position().left + "px";
    cloud12.start = cloud10.position().left + "px";
    cloud13.start = cloud10.position().left + "px";
    cloud14.start = cloud10.position().left + "px";
    
    animate.call(cloud1);
    animate.call(cloud2);
    animate.call(cloud3);
    animate.call(cloud4);
    animate.call(cloud5);
    animate.call(cloud6);
    animate.call(cloud7);
    animate.call(cloud8);
    animate.call(cloud9);
    animate.call(cloud10);
    animate.call(cloud11);
    animate.call(cloud12);
    animate.call(cloud13);
    animate.call(cloud14);
    /*var poofLeftCloud = new ScrollMagic.Scene({
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