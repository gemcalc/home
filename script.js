// Get HTML elements
const textInput = document.getElementById("text-input");
const englishOrdinalOutput = document.getElementById("english-ordinal-output");
const reducedOutput = document.getElementById("reduced-output");

// Add event listener to text input
textInput.addEventListener("input", () => {
  // Get input text and convert to uppercase
  const inputText = textInput.value.toUpperCase();

  // Calculate English Ordinal value
  let englishOrdinalValue = 0;
  for (let i = 0; i < inputText.length; i++) {
    const letterValue = inputText.charCodeAt(i) - 64;
    englishOrdinalValue += letterValue;
  }
  englishOrdinalOutput.innerText = englishOrdinalValue || "0";

  // Calculate Reduced value
  let reducedValue = englishOrdinalValue;
  while (reducedValue > 9) {
    let tempValue = 0;
    for (let i = 0; i < reducedValue.toString().length; i++) {
      tempValue += parseInt(reducedValue.toString()[i]);
    }
    reducedValue = tempValue;
  }
  reducedOutput.innerText = reducedValue || "0";
});

// Initialize outputs to "0"
englishOrdinalOutput.innerText = "0";
reducedOutput.innerText = "0";
