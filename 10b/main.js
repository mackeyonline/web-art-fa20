$(document).ready(function(){

    let fontSize = 40;
    $(window).on("click", function(){
        console.log("i was clicked!, but in jquery");
        printHello();
        $('body').css('background', 'white');
        $('body').css('color', 'black');
        $('.box').html('src="images/a2.jpg',);
        // $('#box').css('font-size', `${fontSize}px` );

        //$(this).css('font-size', fontSize);
        //fontSize = fontSize + 10;

        // fontSize++;
        //$('#box').css('font-family', "Comic Sans MS");
        //$('#box').css('color', '#0000ff');
    

        //$("#box").addClass('rotate');
    })

    let box = document.getElementById("box");




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