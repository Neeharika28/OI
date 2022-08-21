img ="";
function preload(){
    img = loadImage("play.jpeg");
}
function setup(){
    canvas = createCanvas(500,450);
    canvas.center();
}
function draw(){
image(img,0,0,500,640);
fill("#000000");
text("Dart Board",115,115);
noFill();
stroke("#000000");
rect(25,100,450,300);
}
function home(){
    window.location = "index.html";
}