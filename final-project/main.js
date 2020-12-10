//console.log("hello")
//

//    SPECIAL THANK YOU
//      to Doug Rosman for the help with this creation





//


let qrcode; 
let div;

let chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPOQRSTUVWXYZ01234567890_-."

// let randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);





//let websites = ["https://google.com"]

// let qrOptions = {
//   text: "test",
//   width: 128,
//   height: 128,
//   colorDark : "#000000",
//   colorLight : "#ffffff",
//   correctLevel : QRCode.CorrectLevel.H
// }

// qrcode = new QRCode(document.getElementById("container"), qrOptions);

setInterval(function(){
  
  
  generateRandomQRCode();





    


}, 100);


$(window).click(generateRandomQRCode);


function generateRandomQRCode() {
  let randomURL = "https://www.";
  let randomLength = Math.floor(Math.random()*98 + 2);
  
  for(let i = 0; i < randomLength; i++) {
    randomURL += chars[Math.floor(Math.random()*(chars.length))]
  }
  //console.log(randomURL);
  randomURL += ".com"
  let randomSize = Math.floor(Math.random()*700 + 100)
  let dimensionDecider = Math.random()*10;

  if(dimensionDecider < 6) {
    
    randomScaleX =  1;
    randomScaleY =  1;
} else {
    randomScaleX = Math.random()+.6;
    randomScaleY = Math.random()+.4;
}

let randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);



  

  qrOptions = {
    text: randomURL,
    width: randomSize,
    height: randomSize,
    colorDark :randomColor,
    colorLight : "#ffffff",
    correctLevel : QRCode.CorrectLevel.H
  }
  qrcode = new QRCode(document.getElementById("container"), qrOptions);

  


  $('#container img:last-child').css("position", "absolute")
                                .css("left", Math.random() * window.innerWidth).css("top", Math.random() * window.innerHeight)
                                .css("z-index", "5")
                                .css("transform", `scale(${randomScaleX}, ${randomScaleY})`)


}




////////// P5.JS CODE //////////

// function setup() { 
//   let cnv = createCanvas(innerWidth, innerHeight);
//   cnv.parent("#sketch-parent");
  
 
//   div = createDiv("");
//   div.id("qrcode");
  
//   div.style("width", "256px");
//   div.style("height", "256px");
//   div.style("padding", "2px");
//   div.style("background-color", "grey");
//   div.position(0,0);
//   div.center();
  
  
//   qrcode = new QRCode("qrcode");
//   //frameRate(1);
  
// //   makeCode();
// }



// function windowResized() {
//   resizeCanvas(innerWidth, innerHeight);
// }

// function draw() { 
// //  background(255,0,0);
//   let randomURL = "https://www.";
//   let randomLength = Math.floor(random(2, 100));
  
//   for(let i = 0; i < randomLength; i++) {
//     randomURL += chars[Math.floor(random(chars.length))]
//   }
//   //console.log(randomURL);
//   randomURL += ".com"
//   qrcode.makeCode(randomURL);
//   randomURL="";
// }

// function makeCode(_url) {      
    
  
//   let randomSize = Math.floor(Math.random()*700 + 100);

//   let qrOptions = {
//     text: _url,
//     width: randomSize,
//     height: randomSize,
//     colorDark : "#000000",
//     colorLight : "#ffffff",
//     correctLevel : QRCode.CorrectLevel.H
//   }
    
//     qrcode.makeCode("QR Code", qrOptions);
// }


// //function keyPressed() {
  
//   //if(key == '0') {
    
//     //div.remove();
    
//     //div = createDiv("");
//     //div.id("qrcode");
    
//     //div.position(0,0);
//     //div.center();
  
//   	//qrcode = new QRCode("qrcode");
//   //}
//   //else if (key == '1') {
//     //makeCode();
//   //}
// //}

// function mouseClicked() {
  
//   if(clicked == true) {
    
//     div.remove();
    
//     div = createDiv("");
//     div.id("qrcode");
    
//     div.position(0,0);
//     div.center();
  
//   	qrcode = new QRCode("qrcode");
//   }
//   else {
//     makeCode();
//   }
// }