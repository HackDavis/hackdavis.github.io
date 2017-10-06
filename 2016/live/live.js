function CountDownTimer(dt)
{
    var end = new Date(dt);

    var _second = 1000;
    var _minute = _second * 60;
    var _hour = _minute * 60;
    var _day = _hour * 24;
    var timer;

    function showRemaining() {
        var now = new Date();
        var distance = end - now;
        if (distance < 0) {
            clearInterval(timer);
            return;
        }
        var days = Math.floor(distance / _day);
        var hours = Math.floor((distance % _day) / _hour);
        var minutes = Math.floor((distance % _hour) / _minute);
        var seconds = Math.floor((distance % _minute) / _second);

        document.getElementById('days').innerHTML = '';
        document.getElementById('hours').innerHTML = '';
        document.getElementById('min').innerHTML = '';
        document.getElementById('sec').innerHTML = '';

        document.getElementById('days').innerHTML = days;
        document.getElementById('hours').innerHTML += hours;
        document.getElementById('min').innerHTML += minutes;
        document.getElementById('sec').innerHTML += seconds;
    }

    timer = setInterval(showRemaining, 1000);
}

$(document).ready(function() {

    CountDownTimer('05/08/2016 12:05:00 PM');

    $("#yellowbar>a>img").hover(
        function () {
            $("#" + this.id + "-label").show();
          }, 
          function () {
            $("#" + this.id + "-label").hide();
          }
    );
});


