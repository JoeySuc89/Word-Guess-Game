var wordBank = ["Superman", "Batman", "Aquaman", "Iron Man", "Antman", "Cyborg", "Flash", "Cyborg", "Captain America", "Hulk", "Black Panther", "Shazam", "Captain Marvel", "Doctor Strange", "Black Widow", "Wonder Woman"];
var rightGuess = [];
var wrongGuess = [];
var underScore = [];
console.log(wordBank)

function getRanWord() {
  var randomIndex = Math.floor(Math.random() * wordBank.length);
  return wordBank[randomIndex]
}

var randomWord = getRanWord()

console.log(randomWord)
