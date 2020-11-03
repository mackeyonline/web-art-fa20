//global variables
let x;
let y;
let c;

function setup() {
  createCanvas(400, 400);
  background (255, 0, 0);
  c = color(random(255), 50,);
  
  //initialize variables (give them values)
  x = 0;
  y = 0;
  
}

function draw() {
  //background(127, 0, 127);
  
  fill(c);
  ellipse(x, y, 20, 20);
  
  //x = x + 1;
  x+=random(10);
  y+=4.3;
  
  //let ok = width;
  //print(ok);
  //if circle reaches edge of screen, reset back to top
  if(y > height){
    y = 0;
    c = color(random(255), random(255), random(255));
  }
  
  
  if(x > width){
    x = 0;
    c = color(random(255), random(255), random(255));
  }
  
}