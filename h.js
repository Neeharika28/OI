img ="";
function preload(){
    img = loadImage("ht.jpeg");
}
function setup(){
    canvas = createCanvas(500,450);
    canvas.center();
}
function draw(){
image(img,0,0,500,640);
fill("#800080");
text("Light",115,115);
noFill();
stroke("#800080");
rect(100,100,350,100);
}
function home(){
    window.location = "index.html";
}