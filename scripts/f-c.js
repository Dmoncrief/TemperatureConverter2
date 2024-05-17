"use strict";

const farenheitInput = document.getElementById("farenheitInput");
const calculateButton = document.getElementById("calculateButton");
const celsiusOutput = document.getElementById("celsiusOutput");

window.onload = init;

function init(){
    calculateButton.onclick = oncalculateButtonClicked;
}

function oncalculateButtonClicked(){
    // get my starting values
    let fahrenheit =  Number(farenheitInput.value);


    // compute the unknowns
    let celsius = (fahrenheit - 32) * ( 5 / 9);
    

    //display the result
    celsiusOutput.value = celsius;

}