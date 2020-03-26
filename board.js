//Global Settings
var canvas = document.querySelector("canvas");
canvas.width = "500";
canvas.height = "500";
var c = canvas.getContext("2d");

//Global Variables and Constants
const height = 220 //height of a spike
const base = 41.8 //base of a spike
const seg =base/2 //half of //base of a spike
const dia = 40 //diameter of a piece
const rad = dia/2 // radius of a piece
const initPos = [seg, seg, seg, seg, seg,  //x white
    seg+4*base, seg+4*base, seg+4*base, 
    seg+6*base, seg+6*base, seg+6*base, seg+6*base, seg+6*base,
    480, 480, 
    seg, seg, seg, seg, seg,  //x white
    seg+4*base, seg+4*base, seg+4*base, 
    seg+6*base, seg+6*base, seg+6*base, seg+6*base, seg+6*base,
    480, 480, 
    480, 480-dia, 480-dia*2, 480-dia*3, 480-dia*4, // y white
    rad, rad+dia, rad+dia*2,
    rad, rad+dia, rad+dia*2, rad+dia*3, rad+dia*4,
    480, 480-dia,
    rad, rad+dia, rad+dia*2, rad+dia*3, rad+dia*4, //y black
    480, 480-dia, 480-dia*2,
    480, 480-dia, 480-dia*2, 480-dia*3, 480-dia*4,
    rad, rad+dia] // initial positions of pieces on board
const N = initPos.length/2 //number of pieces on the board

var position = initPos // current position of pieces on the board
var x = 0 // dynamical x
var y = 0 // dynamical y
var n = 0 // id of active piece

//Functions

function drawSpike(color, ori) { // ori is orientation for spike: 1 for stalactite and -1 for stalagmite
    c.fillStyle = color;
    c.beginPath(); 
    c.moveTo(x,y);
    c.lineTo(x+40, y);
    c.lineTo(x+20, y+height*ori);
    c.lineTo(x,y)
    c.stroke();
    c.fill();
}

function drawBoard(){ // draws empty board
    c.fillStyle = "black"; //horizontal seperation
    c.fillRect(0, 230, 500, 30); 

    c.beginPath(); //vertical seperation
    c.moveTo(250,500);
    c.lineTo(250, 0);
    c.stroke();

    y = 0  //spikes upper half
    x = 0 
    for (var i=0; i<6; i++){ 
        drawSpike("darkred",1)
        x += 2*base
        }
    x = base
    for (var i=0; i<6; i++){
        drawSpike("firebrick",1)
        x += 2*base
        }
    
    y = 500  //spikes lower half
    x = 0 
    for (var i=0; i<6; i++){
        drawSpike("darkred",-1)
        x += 2*base
        }
    x = base
    for (var i=0; i<6; i++){
        drawSpike("firebrick",-1)
        x += 2*base
        }
    }

function PieceW(x, y, id) { //creates a white piece
    this.x =  x;
    this.y = y;
    this.id = id;
    c.beginPath(); //outer circle
    c.arc(x, y, 19, 0, 2*Math.PI, false);
    c.strokeStyle = "#2F2F2F";
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
    c.strokeStyle = "#2F2F2F";
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
    for (var i = 0; i<15; i++){
        piece = new PieceB(pos[i], pos[i+N], i)
    }
    for (var i = 0; i<15; i++){
        piece = new PieceW(pos[i+15], pos[i+15+N], i+15)
    }
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

function selectPiece(){ //selects piece by storing its id in n
    getCursorPosition(canvas, event);
    for (var i = 0; i<N; i++){
        console.log("i=" + i);
        if ( (Math.abs(x-position[i])<15) && (Math.abs(y-position[i+N])<15) ) {
        n = i;        
        }
    }
}

function movePiece(event) { // updates possion of piece with id = 1
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








