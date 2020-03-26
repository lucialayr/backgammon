
var canvas2 = document.querySelector(".dice");
canvas2.width = "130";
canvas2.height = "70";
var c2 = canvas2.getContext("2d");
c2.fillText("Click here for dice roll", 15, 35);

//global variables and constants
const off = 15 //offset from center for dots
const side = 50 //side length of dice

//functions

function drawDot(x,y) { //draws one dot
    c2.beginPath(); 
    c2.arc(x, y, 3, 0, 2*Math.PI, false);
    c2.fillStyle = "black";
    c2.lineWidth = 1;
    c2.fill();
    c2.stroke();
}

function drawDice(x, y, n) { //selects a random number and draws face of the dice accordingly
    if (n==1) {
         drawDot(x,y);
     } else if (n==2) {
         drawDot((x-off), (y-off));
         drawDot((x+off), (y+off));
     } else if (n==3) {
         drawDot(x,y);
         drawDot((x-off), (y-off));
         drawDot((x+off), (y+off));
     } else if (n==4) {
         drawDot((x-off), (y-off));
         drawDot((x+off), (y+off));
         drawDot((x-off), (y+off));
         drawDot((x+off), (y-off));
     } else if (n==5) {
         drawDot(x,y);
         drawDot((x-off), (y-off));
         drawDot((x+off), (y+off));
         drawDot((x-off), (y+off));
         drawDot((x+off), (y-off));
     } else {
         drawDot((x+off), (y));
         drawDot((x-off), (y));
         drawDot((x-off), (y-off));
         drawDot((x+off), (y+off));
         drawDot((x-off), (y+off));
         drawDot((x+off), (y-off));
     }  
 }

function rollDice() { //rolls both dice
    c2.clearRect(0,0,130,70); //complete canvas
    c2.strokeRect(10,10,50,50);  //first dice
    var n = Math.floor(Math.random() * (7 - 1) + 1);
    drawDice(35, 35, n);
    c2.strokeRect(70,10,50,50); //second dice
    var n = Math.floor(Math.random() * (7 - 1) + 1);
    drawDice(95, 35, n);
}

//action on canvas
canvas2.addEventListener("click", rollDice, false); //rolls dice on click

