img ="";
function preload(){
    img = loadImage("birds.jpeg");
}
function setup(){
    canvas = createCanvas(500,450);
    canvas.center();
}
function draw(){
image(img,0,0,500,640);
fill("#003933");
text("Birds",115,315);
noFill();
stroke("#003933");
rect(100,300,350,300);
}
function home(){
    window.location = "index.html";
}