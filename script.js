'use strict';

var runner = document.getElementById('runner');
var x;
var y;
var newXY;
var color;

function position () {
    x = "top: " + Math.floor(Math.random() * 500) + "px;";
    y = "left: " + Math.floor(Math.random() * 100) + "%;";
    newXY = x + y;
    return newXY;

}
position();

console.log(newXY);



runner.style = newXY;

function onClick () {
    runner.style.background = "red";
    runner.innerHTML = "Happy now?";
}

runner.onclick = onClick;

function mouseOver () {
    runner.style.background = "#92d0ff";
    runner.innerHTML = "Fuck off!"
}
function mouseOut () {
    runner.style.background = "#36ff4c";
    runner.innerHTML = "You won't click me!"
}

runner.onmouseover = mouseOver;
runner.onmouseout = mouseOut;

$(document).ready(function() {
    animateDiv();

});

function makeNewPosition($field) {

    // Get viewport dimensions (remove the dimension of the div)
    $field = ($field || $(window));
    var h = $field.height() - 50;
    var w = $field.width() - 50;

    var nh = Math.floor(Math.random() * h);
    var nw = Math.floor(Math.random() * w);

    return [nh, nw];

}

function animateDiv() {
    var $target = $('#runner');
    var newq = makeNewPosition($target.parent());
    var oldq = $target.offset();
    var speed = calcSpeed([oldq.top, oldq.left], newq);

    $('#runner').animate({
        top: newq[0],
        left: newq[1]
    }, speed, function() {
        animateDiv();
    });

};

function calcSpeed(prev, next) {

    var x = Math.abs(prev[1] - next[1]);
    var y = Math.abs(prev[0] - next[0]);

    var greatest = x > y ? x : y;

    var speedModifier = 0.5;

    var speed = Math.ceil(greatest / speedModifier);

    return speed;

}
