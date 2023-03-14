function calculate() {
    var input = document.getElementById("input").value;
    input = input.trim().replace(/\s{2,}/g, ' ');
    var words = [input];
    var table = document.getElementById("wordTable").getElementsByTagName("tbody")[0];
    var totalScore1 = 0;
    var totalScore2 = 0;
    var totalScore3 = 0;
    var totalScore4 = 0;
    for (var i = 0; i < words.length; i++) {
      var word = words[i];
      var score1 = calculateScore1(word);
      var score2 = calculateScore2(word);
      var score3 = calculateScore3(word);
      var score4 = calculateScore4(word);
      totalScore1 += score1;
      totalScore2 += score2;
      totalScore3 += score3;
      totalScore4 += score4;
      var row = table.insertRow(i);
      var wordCell = row.insertCell(0);
      var score1Cell = row.insertCell(1);
      var score2Cell = row.insertCell(2);
      var score3Cell = row.insertCell(3);
      var score4Cell = row.insertCell(4);
      wordCell.innerHTML = word;
      score1Cell.innerHTML = score1;
      score2Cell.innerHTML = score2;
      score3Cell.innerHTML = score3;
      score4Cell.innerHTML = score4;

      
    }

    
    var output1 = document.getElementById("output1");
    var output2 = document.getElementById("output2");
    var output3 = document.getElementById("output3");
    var output4 = document.getElementById("output4");
    output1.innerHTML = "Total score 1: " + totalScore1;
    output2.innerHTML = "Total score 2: " + totalScore2;
    output3.innerHTML = "Total score 3: " + totalScore3;
    output4.innerHTML = "Total score 4: " + totalScore4;
  }

  
  function addWordToTable(word, value1, value2, value3) {
    var table = document.getElementById("wordTable");
    var row = table.insertRow(-1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    cell1.innerHTML = word;
    cell2.innerHTML = value1;
    cell3.innerHTML = value2;
    cell4.innerHTML = value3;
  }
  
  function calculateScore1(word) {
    // English Ordinal
    var score = 0;
    var letterScores = {
      "a": 1, "b": 2, "c": 3, "d": 4, "e": 5, "f": 6, "g": 7, "h": 8,
      "i": 9, "j": 10, "k": 11, "l": 12, "m": 13, "n": 14, "o": 15, "p": 16,
      "q": 17, "r": 18, "s": 19, "t": 20, "u": 21, "v": 22, "w": 23, "x": 24,
      "y": 25, "z": 26
    };
    for (var i = 0; i < word.length; i++) {
      var letter = word.charAt(i).toLowerCase();
      if (letterScores.hasOwnProperty(letter)) {
        score += letterScores[letter];
      }
      //score += letterScores[letter];
      
    }
    return score;
  }

  function calculateScore2(word) {
    // Full Reduction
    var score = 0;
    var letterScores = {
      "a": 1, "b": 2, "c": 3, "d": 4, "e": 5, "f": 6, "g": 7, "h": 8,
      "i": 9, "j": 1, "k": 2, "l": 3, "m": 4, "n": 5, "o": 6, "p": 7,
      "q": 8, "r": 9, "s": 1, "t": 2, "u": 3, "v": 4, "w": 5, "x": 6,
      "y": 7, "z": 8
    };
    for (var i = 0; i < word.length; i++) {
      var letter = word.charAt(i).toLowerCase();
      if (letterScores.hasOwnProperty(letter)) {
        score += letterScores[letter];
      }
    }
    return score;
  }

  function calculateScore3(word) {
    // Reverse
    var score = 0;
    var letterScores = {
      "a": 26, "b": 25, "c": 24, "d": 23, "e": 22, "f": 21, "g": 20, "h": 19,
      "i": 18, "j": 17, "k": 16, "l": 15, "m": 14, "n": 13, "o": 12, "p": 11,
      "q": 10, "r": 9, "s": 8, "t": 7, "u": 6, "v": 5, "w": 4, "x": 3,
      "y": 2, "z": 1
    };
    for (var i = 0; i < word.length; i++) {
      var letter = word.charAt(i).toLowerCase();
      if (letterScores.hasOwnProperty(letter)) {
        score += letterScores[letter];
      }
    }
    return score;
  }


  function calculateScore4(word) {
   // Reverse Reduction
    var score = 0;
    var letterScores = {
      "a": 8, "b": 7, "c": 6, "d": 5, "e": 4, "f": 3, "g": 2, "h": 1,
      "i": 9, "j": 8, "k": 7, "l": 6, "m": 5, "n": 4, "o": 3, "p": 2,
      "q": 1, "r": 9, "s": 8, "t": 7, "u": 6, "v": 5, "w": 4, "x": 3,
      "y": 2, "z": 1
    };
    for (var i = 0; i < word.length; i++) {
      var letter = word.charAt(i).toLowerCase();
      if (letterScores.hasOwnProperty(letter)) {
        score += letterScores[letter];
      }
    }
    return score;
  }


  //Event Listener to handle pressing enter
  // Get the input field
var input = document.getElementById("input");

// Add event listener for "keyup" event
input.addEventListener("keyup", function(event) {
  if (event.key === "Enter") {
    calculate();
  }
});

const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.querySelector('nav ul');



//Prime Number Checker
function isPrime(n) {
  if (n <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}
const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const number = Number(document.getElementById('number').value);
  if (!isNaN(number) && isPrime(number)) {
    let count = 0;
    for (let i = 2; i <= number; i++) {
      if (isPrime(i)) {
        count++;
      }
    }
    document.getElementById('result').innerHTML = `
      <div id="number">${number}</div>
      <div id="prime">${count}th prime!</div>
    `;
  } else if (!isNaN(number)) {
    document.getElementById('result').textContent = `Not Prime`;
  } else {
    document.getElementById('result').textContent = `Not Prime`;
  }
});












