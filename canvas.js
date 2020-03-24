//board
var canvas = document.querySelector("canvas");

canvas.width = "500";
canvas.height = "500";

var c = canvas.getContext("2d");
function drawBoard(){
    c.fillStyle = "black"; //horizontal seperation
    c.fillRect(0, 240, 500, 20); 

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
        //console.log(x)
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
        //console.log(x)
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
        //console.log(x)
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
        //console.log(x)
        }
    }

function PieceW(x, y) {
    this.x =  x;
    this.y = y;
    c.beginPath(); //outer circle
    c.arc(x, y, 19, 0, 2*Math.PI, false);
    c.strokeStyle = "black";
    c.fillStyle = "slategrey";
    c.lineWidth = 3;
    c.fill();
    c.stroke();
    c.beginPath(); //inner circle
    c.arc(x, y, 15/2, 0, 2*Math.PI, false);
    c.fillStyle = "firebrick";
    c.strokestlye = "black";
    c.lineWidth = 1;
    c.fill();
    c.stroke();
}

function PieceB(x, y) {
    this.x =  x;
    this.y = y;
    c.beginPath(); //outer circle
    c.arc(x, y, 15, 0, 2*Math.PI, false);
    c.strokeStyle = "black";
    c.fillStyle = "slategrey";
    c.lineWidth = 9;
    c.fill();
    c.stroke();
    c.beginPath(); //inner circle
    c.arc(x, y, 15/2, 0, 2*Math.PI, false);
    c.fillStyle = "darkred";
    c.strokestlye = "black";
    c.lineWidth = 1;
    c.fill();
    c.stroke();
}

function UpdatePiece(x1, y1, x2, y2) {
    c.clearRect(0,0, 500,500);
    drawBoard();
    piece = new PieceB(x1, y1);
    piece_2 = new PieceW(x2, y2);
    console.log("updated");
}

function timeFunction() {
    setTimeout(function(){ console.log("test"); }, 5000);
}

drawBoard();  
piece = new PieceB(480, 480);
piece_2 = new PieceW(439, 480);


x1 = 20;
x2 = 20;
y1 = 20;
y2 = 250;
UpdatePiece(x1,y1, x2, y2);







