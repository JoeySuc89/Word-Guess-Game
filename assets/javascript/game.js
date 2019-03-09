var wordBank = ["superman", "batman", "aquaman", "ironman", "antman", "cyborg", "flash", "captain america", "hulk", "black panther", "shazam", "captain marvel", "doctor strange", "black widow", "wonder woman"];
var rightGuess = [];
var wrongGuess = [];
var guess; //user guess
var letterKeys = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",]
console.log(wordBank)

function getRanWord() {
  var randomIndex = Math.floor(Math.random() * wordBank.length);
  return wordBank[randomIndex]
}

var randomWord = getRanWord()

console.log(randomWord)

function start() {
  for (i = 0; i < randomWord.length; i++) {
    rightGuess[i] = "_";
  }
  document.getElementById("answer").innerHTML = rightGuess.join(" ");
  console.log(wordBank)
}

function checkLetter() {
  document.onkeyup = function(event) {
    guess = event.key.toLowerCase();
    var found = false;
    if (letterKeys.indexOf(guess) !== -1){
      for(i = 0; i < randomWord.length; i++){
        if (guess === randomWord[i]){
          rightGuess[i] = guess;
          document.getElementById("answer").innerHTML = rightGuess.join(" ");
          found = true;
        }
      }
      if (found) return;
      if (wrongGuess.indexOf(guess) < 0) {
        wrongGuess.push(guess);
        document.getElementById("incorrect").innerHTML = wrongGuess.join(" ");

     }
    }
  }
}

start();
checkLetter();
