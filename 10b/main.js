$(document).ready(function(){


    let count = 0;
    let imagez = [
        "images/a1.jpg", 
        "images/a2.jpg", 
        "images/a3.jpg", 
        "images/a4.jpg", 
        "images/a5.jpg", 
        "images/a6.jpg", 
        "images/a7.jpg", 
        "images/a8.jpg", 
        "images/a9.jpg", 
        "images/a10.jpg", 
        "images/a11.jpg", 
        "images/a12.jpg", 
        "images/a13.jpg", 
        "images/a14.jpg", 
        "images/a15.jpg", 
        "images/a16.jpg" 
    ]


    //var count = 0;
    let fontSize = 80;
    $(window).on("click", function(){
        console.log("i was clicked!, but in jquery");
        printHello();
        $('body').css('background', 'white');
        $('body').css('color', 'black');
        //count++;
        

        
        // $('#box').css('font-size', `${fontSize}px` );

        //$(this).css('font-size', fontSize);
        //fontSize = fontSize + 10;

        // fontSize++;
        //$('#box').css('font-family', "Comic Sans MS");
        //$('#box').css('color', '#0000ff');
    

        //$("#box").addClass('rotate');
    })


    //var count = 0;
    let index = 0;

    $('#box').on({
        'click': function(){
            $('#box').attr('src', currentImage);
            //count++;

        let currentImage = imagez[index];
        //count = count++

        index++;
        }

    });


    //let box = document.getElementById("box");

    //$('img').on('click', function(){
        
    //    var image = 

        // execute your image swap code
    
    //});




    //$(document).on('wheel', function(){

       // let amountScrolled = $(document).scrollTop()

        //console.log("scroll: " + amountScrolled);

        //$('h2').append(Math.random());


   // })





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