img ="";
function preload(){
    img = loadImage("sr.jpeg");
}
function setup(){
    canvas = createCanvas(500,450);
    canvas.center();
}
function draw(){
image(img,0,0,500,640);
fill("#FFFFFF");
text("Macbook",115,315);
noFill();
stroke("#FFFFFF");
rect(100,150,350,200);
}
function home(){
    window.location = "index.html";
}