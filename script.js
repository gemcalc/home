function calculate() {
  const word = document.getElementById("word").value.toUpperCase();

  const englishOrdinalValueCipher = { A:1, B:2, C:3, D:4, E:5, F:6, G:7, H:8, I:9, J:10, K:11, L:12, M:13, N:14, O:15, P:16, Q:17, R:18, S:19, T:20, U:21, V:22, W:23, X:24, Y:25, Z:26 };
  
  const reducedValueCipher = { A:1, B:2, C:3, D:4, E:5, F:6, G:7, H:8, I:9, J:1, K:2, L:3, M:4, N:5, O:6, P:7, Q:8, R:9, S:1, T:2, U:3, V:4, W:5, X:6, Y:7, Z:8 };

  let englishOrdinalValue = 0;
  let reducedValue = 0;

  for (let i = 0; i < word.length; i++) {
    const letter = word[i];
    const englishOrdinalValueLetterValue = englishOrdinalValueCipher[letter];
    const reducedValueLetterValue = reducedValueCipher[letter];

    englishOrdinalValue += englishOrdinalValueLetterValue;
    reducedValue += reducedValueLetterValue;
  }

  document.getElementById("english-ordinal").textContent = englishOrdinalValue;
  document.getElementById("reduced").textContent = reducedValue;
}

