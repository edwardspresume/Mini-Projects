//Radio degrees
var radioF = document.getElementById('radioF');
var radioC = document.getElementById('radioC');
var radioK = document.getElementById('radioK');

//user Input
var degreeInput = document.getElementById('degreeInput');

//Hides result section
var output = document.getElementById('output').style.visibility = 'hidden';


//Converted degrees
var output1 = document.getElementById('output1');
var output2 = document.getElementById('output2');

//Select the fahrenheit degreee to be converted
radioF.addEventListener('click', function () {
    degreeInput.placeholder = "Enter fahrenheit \xB0 ";
    degreeInput.addEventListener('input', function (e) {
        output = document.getElementById('output').style.visibility = 'visible';
        var celsius = '\xB0c';
        var kelvin = '\xB0k';
        var degrees = e.target.value;
        output1.innerHTML = (degrees * (9 / 5) + 32) + celsius.sup();
        output2.innerHTML = ((degrees - 32) / 1.8 + 273.15) + kelvin.sup();


    });
})


//Select the celsius degreee to be converted
radioC.addEventListener('click', function () {
    degreeInput.placeholder = "Enter celsius \xB0 ";
    degreeInput.addEventListener('input', function (e) {
        output = document.getElementById('output').style.visibility = 'visible';
        var fahrenheit = '\xB0F';
        var kelvin = '\xB0k';
        var degrees = e.target.value;
        output1.innerHTML = (degrees * 1.8 + 32) + fahrenheit.sup();
        output2.innerHTML = (degrees + 273.15) + kelvin.sup();


    });
})

//Select the kelvin degreee to be converted
radioK.addEventListener('click', function () {
    degreeInput.placeholder = "Enter kelvin \xB0 ";
    degreeInput.addEventListener('input', function (e) {
        output = document.getElementById('output').style.visibility = 'visible';
        var fahrenheit = '\xB0F';
        var celsius = '\xB0k';
        var degrees = e.target.value;
        output1.innerHTML = ((degrees - 273.15) * 1.8000 + 32.00) + fahrenheit.sup();
        output2.innerHTML = (degrees - 273) + celsius.sup();


    });
})
