img ="";
function preload(){
    img = loadImage("fish.jpeg");
}
function setup(){
    canvas = createCanvas(500,450);
    canvas.center();
}
function draw(){
image(img,0,0,500,640);
fill("#FFFFFF");
text("Fish",115,230);
noFill();
stroke("FFFFFF");
rect(100,200,350,100);
}
function home(){
    window.location = "index.html";
}