//console.log("hello")


let qrcode; 
let div;

let chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPOQRSTUVWXYZ01234567890_-."

let websites = ["https://google.com"]

function setup() { 
  createCanvas(750, 750);
  
 
  div = createDiv("");
  div.id("qrcode");
  
  div.style("width", "256px");
  div.style("height", "256px");
  div.style("padding", "2px");
  div.style("background-color", "grey");
  div.position(0,0);
  div.center();
  
  
  qrcode = new QRCode("qrcode");
  frameRate(1);
  
//   makeCode();
} 

function draw() { 
//  background(255,0,0);
  let randomURL = "https://www.";
  let randomLength = Math.floor(random(2, 100));
  
  for(let i = 0; i < randomLength; i++) {
    randomURL += chars[Math.floor(random(chars.length))]
  }
  //console.log(randomURL);
  randomURL += ".com"
  qrcode.makeCode(randomURL);
  randomURL="";
}

function makeCode(_url) {      
    
    
    qrcode.makeCode(_url);
}


//function keyPressed() {
  
  //if(key == '0') {
    
    //div.remove();
    
    //div = createDiv("");
    //div.id("qrcode");
    
    //div.position(0,0);
    //div.center();
  
  	//qrcode = new QRCode("qrcode");
  //}
  //else if (key == '1') {
    //makeCode();
  //}
//}

function mouseClicked() {
  
  if(clicked == true) {
    
    div.remove();
    
    div = createDiv("");
    div.id("qrcode");
    
    div.position(0,0);
    div.center();
  
  	qrcode = new QRCode("qrcode");
  }
  else if (clicked == false) {
    makeCode();
  }
}