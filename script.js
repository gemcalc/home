function calculate() {
  let word = document.getElementById("word").value.toUpperCase();
  let result = document.getElementById("result").getElementsByTagName("span")[0];
  let sum = 0;

  for (let i = 0; i < word.length; i++) {
    let letter = word.charCodeAt(i) - 64;
    sum += letter;
  }

  result.innerText = sum;
}
