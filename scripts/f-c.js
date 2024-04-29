"use strict"


window.onload = init;


/* When the input field receives input, convert the value from fahrenheit to celsius */
function temperatureConverter(valNum) {
    valNum = parseFloat(valNum);
    document.getElementById("outputCelsius").innerHTML = (valNum-32) / 1.8;
  }



  const farenheightInput = document.getElementById("farenheightInput");
  const CalculateButton = document.getElementById("calculateButton");
  const celsiusOutput = document.getElementById("celsiusOutput");


  window.onload=init;

  function init()
  CalculateButton.onclick = oncalculateButtonClicked;

  function oncalculateButtonClicked() {
    // get my starting values
    let farenheight = Number(farenheightInput.value);


//   compute the unknowns
let ceslsis = (farenheight-32) * (5/9);


// display the result
celsiusOutput.value = clesius;
}
 