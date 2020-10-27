$(document).ready(function(){


  let colors = [
    "blue",
    "red",
    "orange",
    "purple",
    "green"
  ]

  let fonts = [
    "Trebuchet",
    "Comic Sans MS",
    "Lucida Sans",
    "Arial",
    "Times New Roman"

  ]

  let fontIndex = 0;

  $('#font-swap').click(function(){

    
    let currentFont = fonts[fontIndex];

    $('#font-swap').css("font-family", currentFont);

    // increment index
    fontIndex++;
    //console.log(index);

    if(fontIndex == fonts.length){
      fontIndex = 0;
    }


  })



})



