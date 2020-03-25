//Global Settings
var canvas = document.querySelector("canvas");
canvas.width = "500";
canvas.height = "500";
var c = canvas.getContext("2d");

//Global Variables
var initPos = [250, 480, 20, 20] // initial positions of pieces on board
var position = initPos // current position of pieces on the board
var N = position.length/2 //number of pieces on the board
var x = 0 // dynamical x
var y = 0 // dynamical y
var n = 0 // id of active piece

//Functions
function drawBoard(){ // draws empty board
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

function PieceW(x, y, id) { //creates a white piece
    this.x =  x;
    this.y = y;
    this.id = id;
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

function PieceB(x, y, id) { //creates a black piece
    this.x =  x;
    this.y = y;
    this.id = id
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

function UpdatePiece(pos) { //updates positions of pieces on board
    c.clearRect(0,0, 500,500); // clears canvas
    drawBoard();
    piece0 = new PieceB(pos[0],pos[0+N], 0);
    piece1 = new PieceW(pos[1], pos[1+N], 1);
    //console.log("updated");
    console.log(position);
}

function InitBoard(initPos) { //sets pieces back to starting positions
    UpdatePiece(initPos);
}

function getCursorPosition(canvas, event) { //gets x,y in canvas
    const rect = canvas.getBoundingClientRect();
    x = Math.round(event.clientX - rect.left);
    y = Math.round(event.clientY - rect.top);
    console.log("cursor positions: x= " + x + " y= " + y);
}

function selectPiece(){ //function picks up correct n 
    n = 0
    console.log("n before update: " + n);
    getCursorPosition(canvas, event);
    for (var i = 0; i<N; i++){
        console.log("i=" + i);
        if ( (Math.abs(x-position[i])<15) && (Math.abs(y-position[i+N])<15) ) {
        n = i;        
        }
    }
    console.log("n after update: " + n);
}

function movePiece(event) { 
    //var n = 0; //would be set to object_id
    getCursorPosition(canvas, event);
    position[n] = x;
    position[n+N] = y;
    UpdatePiece(position);
    //console.log(position);
}


//action on board begins:

InitBoard(initPos);
canvas.addEventListener("mousedown", selectPiece, false)
canvas.addEventListener("mouseup", movePiece, false);








