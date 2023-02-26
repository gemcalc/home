function calculate() {
    let word = document.getElementById("word").value.toUpperCase();
    let cipher = parseInt(document.getElementById("cipherSelect").value);
    let result1 = document.getElementById("result1").getElementsByTagName("span")[0];
    let result2 = document.getElementById("result2").getElementsByTagName("span")[0];
    let sum1 = 0;
    let sum2 = 0;
  
    for (let i = 0; i < word.length; i++) {
      let letter = word.charCodeAt(i) - 64;
      sum1 += letter;
      sum2 += (letter % 9) || 9;
    }
  
    result1.innerText = sum1;
    result2.innerText = sum2;
  }
  