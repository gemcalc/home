function calculate() {
  const word = document.getElementById("word").value.toUpperCase();

  const englishOrdinalValueCipher = {A:1,B:2,C:3,D:4,E:5,F:6,G:7,H:8,I:9,J:10,K:11,L:12,M:13,N:14,O:15,P:16,Q:17,R:18,S:19,T:20,U:21,V:22,W:23,X:24,Y:25,Z:26};
  const reducedValueCipher = {A:1,B:2,C:3,D:4,E:5,F:6,G:7,H:8,I:9,J:1,K:2,L:3,M:4,N:5,O:6,P:7,Q:8,R:9,S:1,T:2,U:3,V:4,W:5,X:6,Y:7,Z:8};
  const reverseOrdinalValueCipher = {Z:1,Y:2,X:3,W:4,V:5,U:6,T:7,S:8,R:9,Q:10,P:11,O:12,N:13,M:14,L:15,K:16,J:17,I:18,H:19,G:20,F:21,E:22,D:23,C:24,B:25,A:26};
  const reverseFullReductionCipher = {Z:8,Y:7,X:6,W:5,V:4,U:3,T:2,S:1,R:9,Q:8,P:7,O:6,N:5,M:4,L:3,K:2,J:1,I:9,H:8,G:7,F:6,E:5,D:4,C:3,B:2,A:1};

  let englishOrdinalValue = 0;
  let reducedValue = 0;
  let reverseOrdinalValue = 0;
  let reverseFullReduction = 0;

  for (let i = 0; i < word.length; i++) {
    const letter = word[i];
    const englishOrdinalValueLetterValue = englishOrdinalValueCipher[letter];
    const reducedValueLetterValue = reducedValueCipher[letter];
    const reverseOrdinalValueLetterValue = reverseOrdinalValueCipher[letter];
    const reverseFullReductionLetterValue = reverseFullReductionCipher[letter];

    englishOrdinalValue += englishOrdinalValueLetterValue;
    reducedValue += reducedValueLetterValue;
    reverseOrdinalValue += reverseOrdinalValueLetterValue;
    reverseFullReduction += reverseFullReductionLetterValue;

    if (!isNaN(englishOrdinalValueLetterValue)) {
      englishOrdinalValue += englishOrdinalValueLetterValue;
    }

    if (!isNaN(reducedValueLetterValue)) {
      reducedValue += reducedValueLetterValue;
    }

    if (!isNaN(englishOrdinalValueLetterValue)) {
      reverseOrdinalValue += reverseOrdinalValueLetterValue;
    }

    if (!isNaN(reducedValueLetterValue)) {
      reverseFullReduction += reverseFullReductionLetterValue;
    }


  }

  document.getElementById("english-ordinal").textContent = englishOrdinalValue;
  document.getElementById("reduced").textContent = reducedValue;
  document.getElementById("reverse-ordinal").textContent = reverseOrdinalValue;
  document.getElementById("reverse-full-reduction").textContent = reverseFullReduction;
}
