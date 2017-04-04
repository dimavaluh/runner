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