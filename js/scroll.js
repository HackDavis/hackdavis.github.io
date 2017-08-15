$(function() {
    const slow = 1000000;
    const fast = slow / 10;
    const slower = slow / 2;

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
    
    leftcloud1.velocity({left: (Number(leftcloud1.css("left").slice(0, -2)) + 3000) + "px"}, {duration: slow, easing:"linear"});
    leftcloud2.velocity({left: (Number(leftcloud2.css("left").slice(0, -2)) + 3000) + "px"}, {duration: slower, easing:"linear"});
    leftcloud3.velocity({left: (Number(leftcloud3.css("left").slice(0, -2)) + 3000) + "px"}, {duration: fast, easing:"linear"});
    leftcloud4.velocity({left: (Number(leftcloud4.css("left").slice(0, -2)) + 3000) + "px"}, {duration: fast, easing:"linear"});
    leftcloud5.velocity({left: (Number(leftcloud5.css("left").slice(0, -2)) + 3000) + "px"}, {duration: slower, easing:"linear"});
    leftcloud6.velocity({left: (Number(leftcloud6.css("left").slice(0, -2)) + 3000) + "px"}, {duration: fast, easing:"linear"});
    leftcloud7.velocity({left: (Number(leftcloud7.css("left").slice(0, -2)) + 3000) + "px"}, {duration: fast, easing:"linear"});
    leftcloud8.velocity({left: (Number(leftcloud8.css("left").slice(0, -2)) + 3000) + "px"}, {duration: slower, easing:"linear"});
    leftcloud9.velocity({left: (Number(leftcloud9.css("left").slice(0, -2)) + 3000) + "px"}, {duration: fast, easing:"linear"});
    leftcloud10.velocity({left: (Number(leftcloud10.css("left").slice(0, -2)) + 3000) + "px"}, {duration: slow, easing:"linear"});    
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