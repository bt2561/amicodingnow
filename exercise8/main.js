
document.addEventListener("DOMContentLoaded", function() {
    console.log('this works')

function sayHello() {
    console.log('Hi')
}

sayHello ()

let grayButton = document.getElementById("grayButton");
let blueButton = document.getElementById("blueButton");
let yellowButton = document.getElementById("yellowButton");


function switchToGray() {
  let body = document.querySelector("body");
  body.style.backgroundColor = "gray";
  body.style.color = "white";
}

function switchToBlue() {
  let body = document.querySelector("body");
  body.style.backgroundColor = "blue";
  body.style.color = "white";
}

function switchToYellow() {
  let body = document.querySelector("body");
  body.style.backgroundColor = "yellow";
  body.style.color = "black";
}

grayButton.addEventListener("click", switchToGray);
blueButton.addEventListener("click", switchToBlue);
yellowButton.addEventListener("click", switchToYellow);
});