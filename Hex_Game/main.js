(function(){

    //Getting random HEX value
    function getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

     //Convert Hex to RGB
    function hexToRgb(hex) {
        // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
        var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
        hex = hex.replace(shorthandRegex, function(m, r, g, b) {
            return r + r + g + g + b + b;
        });
        var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        console.log(result);
        return result ? {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16)
        } : null;
    }

    //Checking if resHex is a valid Hexadecimal
    function check(inputString){
        //Checking if resHex is the correct answer
        function isCorrect(hexInput){
            if (hexInput == bgColor){
                console.log('correcto');
                //Bringing the "wrapper" element to work with it
                var wrapper = document.querySelector('.wrapper');
                //Creating div to display results
                var result = document.createElement('div');
                result.setAttribute('class', "results");
                result.innerHTML = "<div style='font-weight: bold;'>" + "Correct!" + "</div>";
                console.log(result);
                wrapper.appendChild(result)
                //Creating div to display guessed color
                var correctColor = document.createElement('div');
                correctColor.setAttribute('class', "results");
                correctColor.innerHTML = "Your Color:" + 
                "<div id='colorShape' style='background-color:"+ hexInput + "'>" + "</div>";
                console.log(correctColor);
                wrapper.appendChild(correctColor)
                //Creating div to display correct hex value
                var correctHex = document.createElement('div');
                correctHex.setAttribute('class', "results");
                correctHex.innerHTML = "Answer:"+  
                "<span style='padding-left: 5px; font-weight: bold;'>" + bgColor + "</span>"
                console.log(correctHex);
                wrapper.appendChild(correctHex)
                //Pick "guess-button" and removing its content to avoid display
                guessButton = document.querySelector('.guess');
                guessButton.innerHTML = ''
                //Creating new button to ask for another chance to play
                var anotherButton = document.createElement('div');
                anotherButton.setAttribute('class', "another");
                anotherButton.innerHTML = "<button id='another-button'>" + "ANOTHER" + "</button>";
                console.log(anotherButton);
                wrapper.appendChild(anotherButton)
                //Giving the new button the function to reload the page to play again
                anotherButton.addEventListener('click', function(event){
                    window.location.reload();
                })
                
            }else{
                console.log('incorrecto');
                //Bringing the "wrapper" element to work with it
                var wrapper = document.querySelector('.wrapper');
                //Creating div to display results
                var result = document.createElement('div');
                result.setAttribute('class', "results");
                result.innerHTML = "<div style='font-weight: bold;'>" + "Inorrect!" + "</div>";
                console.log(result);
                wrapper.appendChild(result)
                //Creating div to display guessed color
                var correctColor = document.createElement('div');
                correctColor.setAttribute('class', "results");
                correctColor.innerHTML = "Your Color:" + 
                "<div id='colorShape' style='background-color:"+ hexInput + "'>" + "</div>";
                console.log(correctColor);
                wrapper.appendChild(correctColor)
                //Creating div to display correct hex value
                var correctHex = document.createElement('div');
                correctHex.setAttribute('class', "results");
                correctHex.innerHTML = "Answer:"+  
                "<span style='padding-left: 5px; font-weight: bold;'>" + bgColor + "</span>"
                console.log(correctHex);
                wrapper.appendChild(correctHex)
                //Pick "guess-button" and removing its content to avoid display
                guessButton = document.querySelector('.guess');
                guessButton.innerHTML = ''
                //Creating new button to ask for another chance to play
                var anotherButton = document.createElement('div');
                anotherButton.setAttribute('class', "another");
                anotherButton.innerHTML = "<button id='another-button'>" + "ANOTHER" + "</button>";
                console.log(anotherButton);
                wrapper.appendChild(anotherButton)
                //Giving the new button the function to reload the page to play again
                anotherButton.addEventListener('click', function(event){
                    window.location.reload();
                })
                
            }
        } 
        //Setting criteria to make an input acceptable or not
        var re = /^#[0-9A-F]{6}$/;
        var re3 = /^#([0-9A-F]{3}){1,2}/g;
        //Comparing input introduced with previously stablished criteria
        if(re.test(inputString)||re3.test(inputString)) {
        isCorrect(inputString);
        } else {
        alert('Please guess a valid 6-character (#000000 - #ffffff) or 3-character hex value (#000 - #fff)');
        }
        re.lastIndex = 0;
    }

    //Setting random color as background using "getRandomColor()" function
    var bgColor = getRandomColor();
    console.log(bgColor);
    document.body.style.background = bgColor;

    //Checking if background color is dark or bright in order to change font color from black to white  
    var bgr = hexToRgb(bgColor);
    console.log((bgr.r*0.299 + bgr.g*0.587 + bgr.b*0.114));
    if ((bgr.r*0.299 + bgr.g*0.587 + bgr.b*0.114) >90){
        console.log('no');
    }else{
        console.log('si');
        var whiteFont = document.getElementById('title');
        whiteFont.setAttribute('id', 'white-font')
    }

    //Providing functionality to the "guess-button", calling "check" function
    var button = document.getElementById('guess-button');
    button.addEventListener('click', function(e){
        console.log(e.target.id);
        console.log('clickeaste el botón');
        var respuesta = document.getElementById('guess-input');
        console.log(respuesta.value);
        var resHex = '#'+ respuesta.value.toUpperCase();
        console.log(resHex);
        //Checking if resHex is a valid Hexadecimal
        check(resHex);
    })

})()