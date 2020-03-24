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
    console.log(x);
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

    x = 41.8
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
    
    41.8
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
    }
}


//mouse interaction
window.addEventListener("click", 
function(){
    console.log("test");
});




   // pieces

   var myPiece;

    function Piece(x, y, radius, color, strokeWidth) {
        this.x =  x;
        this.y = y;
        this.radius = radius;
        c.fillStyle = color;
        c.beginPath();
        c.arc(x, y, radius, 0, 2*Math.PI, false);
        c.strokeStyle = "dimgrey";
        c.fillStyle = "darkgrey"
        c.lineWidth = strokeWidth;
        c.fill();
        c.stroke();
    }


