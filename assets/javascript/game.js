var wordBank = ["superman", "batman", "aquaman", "ironman", "antman", "cyborg", "flash", "captain america", "hulk", "black panther", "shazam", "captain marvel", "doctor strange", "black widow", "wonder woman"];
var rightGuess = [];
var wrongGuess = [];
var guess; //user guess
var letterKeys = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",]
var wins = 0;
var losses = 0;
var remainingGuesses = 10;

var wins = document.getElementById("wins-text");
var losses = document.getElementById("losses-text");
var guessesLeft = document.getElementById("guesses-left");
console.log(wordBank)
// picks random word for the user to guess
function getRanWord() {
  var randomIndex = Math.floor(Math.random() * wordBank.length);
  return wordBank[randomIndex]
}

var randomWord = getRanWord()

console.log(randomWord)

// typing the correct letters will show up in place of underscores
function start() {
  for (i = 0; i < randomWord.length; i++) {
    rightGuess[i] = "_";
  }
  document.getElementById("answer").innerHTML = rightGuess.join(" ");
  console.log(wordBank)
}
document.onkeyup = function() {
  resetWord();
  resetVar();

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
          start();
            if (rightGuess.join(" ") == randomWord) {
              document.getElementById("wins-text") = "wins" + 1;
              wins++;
            }
        }
      }
      if (found) return;
      if (wrongGuess.indexOf(guess) < 0) {
        wrongGuess.push(guess);
        document.getElementById("incorrect").innerHTML = wrongGuess.join(" ");
        remainingGuesses--;
        document.getElementById("guesses-left").innerHTML = remainingGuesses;

        if (remainingGuesses === 0) {
          document.getElementById("losses-text").innerHTML = losses + 1;
          losses++;
          console.log(losses);
          resetWord();

        }
     }
    }
  }
}

function resetWord() {
  var randomIndex = Math.floor(Math.random() * wordBank.length);
  return wordBank[randomIndex];
  currentWord = wordBank[randWord];
  wordList.splice(randWord, 1);
  for (i = 0; i < currentWord.length; i++) {
    wordBank.push("_");
    document.getElementById("answer").innerHTML = wordBank.join(" ");
  }
}



start();
checkLetter();
resetWord();
