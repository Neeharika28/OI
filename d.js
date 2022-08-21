img ="";
function preload(){
    img = loadImage("draw.jpeg");
}
function setup(){
    canvas = createCanvas(500,450);
    canvas.center();
}
function draw(){
image(img,0,0,500,640);
fill("#FFFFFF");
text("Peacock",115,165);
noFill();
stroke("#FFFFFF");
rect(100,150,350,300);
}
function home(){
    window.location = "index.html";
}