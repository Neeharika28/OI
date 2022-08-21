img ="";
function preload(){
    img = loadImage("living.jpeg");
}
function setup(){
    canvas = createCanvas(500,450);
    canvas.center();
}
function draw(){
image(img,0,0,500,630);
fill("#003933");
text("Light",100,115);
noFill();
stroke("#003933");
rect(60,100,350,300);
}
function home(){
    window.location = "index.html";
}