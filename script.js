function calculate() {
  const word = document.getElementById("word").value.toUpperCase();

  let englishOrdinalValue = 0;
  let reducedValue = 0;

  for (let i = 0; i < word.length; i++) {
    const letterValue = word.charCodeAt(i) - 64;

    englishOrdinalValue += letterValue;
    reducedValue += parseInt(letterValue.toString().slice(-1));
  }

  document.getElementById("english-ordinal").textContent = englishOrdinalValue;
  document.getElementById("reduced").textContent = reducedValue;
}
