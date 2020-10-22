$(document).ready(function(){

    let fontSize = 16;
    $('#box').on("click", function(){
        console.log("i was clicked!, but in jquery");
        printHello();
        $('body').css('background', 'purple');
        // $('#box').css('font-size', `${fontSize}px` );

        $(this).css('font-size', fontSize);
        fontSize = fontSize + 10;

        // fontSize++;
        $('#box').css('font-family', "Comic Sans MS");
        $('#box').css('color', '#0000ff');

        $("#box").addClass('rotate');
    })


    // Mouse wheel event: trigger aan effect when user scrolls
    let shouldAddText = true;
    $(document).on('wheel', function(){
        //console.log("scrolling happened!");

        let coolBox = `<div class="cool-box"></div>`;

        let amountScrolled = $(document).scrollTop()

        console.log("scroll: " + amountScrolled);

        if(amountScrolled > 1000 && shouldAddText == true) {
            $('body').css('background', 'pink');
            let p = `<p class="some-text">""""someText""""</p>`;

            $('body').append(p)
            $('some-text').css('top', `${amountScrolled + 400}px`);
            shouldAddText = false;

        }

        $('body').append(coolBox);


    })

    setInterval(function(){
        let coolBox = `<div class="cool-box></div>`;
        $('body').append(coolBox);

        let randomR = Math.floor(Math.random() * 256);
        let randomG = Math.floor(Math.random() * 256);
        let randomB = Math.floor(Math.random() * 256);

        $('.cool-box').css('background', `rgb(${randomR}, ${randomG}, ${randomB})`)


    }, 5000)

    setTimeout(function(){


    }, 3000)




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