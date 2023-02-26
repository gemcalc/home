function calculate() {
  let word = document.getElementById("word").value.toUpperCase();
  let eoResult = document.getElementById("english-ordinal").getElementsByTagName("span")[0];
  let rdResult = document.getElementById("reduced").getElementsByTagName("span")[0];
  let eoSum = 0;
  let rdSum = 0;

  for (let i = 0; i < word.length; i++) {
    let letter = word.charCodeAt(i) - 64;
    eoSum += letter;
    rdSum += (letter % 9) || 9;
  }

  eoResult.innerText = eoSum;
  rdResult.innerText = rdSum;
}
