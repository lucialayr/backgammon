//board
var canvas = document.querySelector("canvas");

canvas.width = "500";
canvas.height = "500";

var c = canvas.getContext("2d");


//mouse interaction
window.addEventListener("click", 
function(){
    console.log("test");
});
//board elements
c.fillStyle = "black";
c.fillRect(0, 240, 500, 20); //horizontal seperation


c.beginPath(); //vertical seperation
c.moveTo(250,500);
c.lineTo(250, 0);
c.stroke();

//spikes
var x = 0 
c.fillStyle = "darkred";
for (var i=0; i<12; i++){
c.beginPath(); 
c.moveTo(x,0);
c.lineTo(x+40, 0);
c.lineTo(x+20, 230);
c.lineTo(x,0)
c.stroke();
c.fill();
x += 41.8;
console.log(x)
}

x = 0
for (var i=0; i<12; i++){
    c.beginPath(); //spikes
    c.moveTo(x,500);
    c.lineTo(x+40, 500);
    c.lineTo(x+20, 270);
    c.lineTo(x,500)
    c.stroke();
    c.fill();
    x += 2*41.8;
    console.log(x)
    }

    var x = 41.8
    c.fillStyle = "firebrick";
    for (var i=0; i<12; i++){
    c.beginPath(); 
    c.moveTo(x,0);
    c.lineTo(x+40, 0);
    c.lineTo(x+20, 230);
    c.lineTo(x,0)
    c.stroke();
    c.fill();
    x += 2*41.8;
    console.log(x)
    }
    
    x = 41.8
    for (var i=0; i<12; i++){
        c.beginPath(); //spikes
        c.moveTo(x,500);
        c.lineTo(x+40, 500);
        c.lineTo(x+20, 270);
        c.lineTo(x,500)
        c.stroke();
        c.fill();
        x += 2*41.8;
        console.log(x)
        }

