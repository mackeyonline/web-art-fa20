$(document).ready(function(){

    let fontSize = 16;
    $('#box').on("click", function(){
        console.log("i was clicked!, but in jquery");
        printHello();
        $('body').css('background', 'purple');
        $('#box').css('font-size', `${fontSize}px` );
        fontSize++;
        $('#box').css('font-family', "Comic Sans MS");
        $('#box').css('color', 'red');
    })




    // call the function
    addDeezOn(5, 10);

    // defining a function (addDeezOn aka addTheNumbers)
    function addDeezOn(num1, num2) {
        let sum = num1 + num2;
        console.log(sum);
    }

    function printHello(){
        console.log("hello");
    }


})



// let myCoolBox = document.getElementById("box");

// myCoolBox.addEventListener("click", function(){



// console.log("i was clicked");

// })