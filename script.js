function calculate() {
  const englishOrdinalValue = document.getElementById("english-ordinal-value");
  const reducedValue = document.getElementById("reduced-value");

  let input = document.getElementById("text-input").value.toUpperCase();
  let englishOrdinalSum = 0;
  let reducedSum = 0;

  for (let i = 0; i < input.length; i++) {
    let letter = input.charAt(i);

    if (letter.match(/[A-Z]/)) {
      englishOrdinalSum += letter.charCodeAt(0) - 64;
      reducedSum += letter.charCodeAt(0) - 96;
    }
  }

  englishOrdinalValue.innerHTML = englishOrdinalSum;
  reducedValue.innerHTML = reducedSum % 9 || 9;
}
