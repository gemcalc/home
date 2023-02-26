function calculate() {
  const word = document.getElementById("word").value.toUpperCase();

  const englishOrdinalValueCipher = {
    A: 1, B: 2, C: 3, D: 4, E: 5, F: 6, G: 7, H: 8, I: 9,
    J: 10, K: 11, L: 12, M: 13, N: 14, O: 15, P: 16, Q: 17, R: 18,
    S: 19, T: 20, U: 21, V: 22, W: 23, X: 24, Y: 25, Z: 26,
  };

  const reducedValueCipher = {
    A: 1, B: 2, C: 3, D: 4, E: 5, F: 6, G: 7, H: 8, I: 9,
    J: 1, K: 2, L: 3, M: 4, N: 5, O: 6, P: 7, Q: 8, R: 9,
    S: 1, T: 2, U: 3, V: 4, W: 5, X: 6, Y: 7, Z: 8,
  };

  const reverseOrdinalValueCipher = {
    A: 26, B: 25, C: 24, D: 23, E: 22, F: 21, G: 20, H: 19, I: 18,
    J: 17, K: 16, L: 15, M: 14, N: 13, O: 12, P: 11, Q: 10, R: 9,
    S: 8, T: 7, U: 6, V: 5, W: 4, X: 3, Y: 2, Z: 1,
  };

  let englishOrdinalValue = 0;
  let reducedValue = 0;
  let reverseOrdinalValue = 0;

  for (let i = 0; i < word.length; i++) {
    const letter = word[i];
    const englishOrdinalValueLetterValue = englishOrdinalValueCipher[letter];
    const reducedValueLetterValue = reducedValueCipher[letter];
    const reverseOrdinalValueLetterValue = reverseOrdinalValueCipher[letter];

    if (englishOrdinalValueLetterValue) {
      englishOrdinalValue += englishOrdinalValueLetterValue;
    }
    if (reducedValueLetterValue) {
      reducedValue += reducedValueLetterValue;
    }
    if (reverseOrdinalValueLetterValue) {
      reverseOrdinalValue += reverseOrdinalValueLetterValue;
    }
  }

  document.getElementById("english-ordinal").textContent = englishOrdinalValue;
  document.getElementById("reduced").textContent = reducedValue;
  document.getElementById("reverse-ordinal").textContent = reverseOrdinalValue;
}
