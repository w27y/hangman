//Game Words Array
const gameWordList = ["ROUDHOUSE", "FALCOR", "SAMSONITE", "KILOMETORY"];

//Random Select a Word
const gameWord = Math.floor(Math.random() * gameWordList.length);
let selectedWord = gameWordList[gameWord];
console.log("The word is:  " + selectedWord);

//Create cell placeholders for each letter of the selected word
let selectedWordLength = selectedWord.length;
console.log("Word length is:  " + selectedWordLength);
let htmlWord = document.getElementById('word');
let placeHolder = "_ ";
htmlWord.textContent = placeHolder.repeat(selectedWordLength);

//User Input
form.addEventListener('submit', logSubmit);

function logSubmit(event) {
    let letterUser = document.getElementsByName("letter")[0].value;
    let letterResult = letterUser.toUpperCase();
    log.textContent = `You entered: ${letterResult}`;
    event.preventDefault();
    console.log("User typed:  " + letterResult);
    wordCheck(letterResult);
}

//Check if letter matches part of word
function wordCheck(letterResult) {
  let validateLetter = selectedWord.includes(letterResult); 
  console.log("validate log:  " + validateLetter);
  if (validateLetter === true) {
    console.log("Letter Matched");
}
  else {
    console.log("Letter didn't match");
  }
}

//Print letter if matched, draw body part if no match

//If word is completed, move to next word and increase score

//If word is not completed after 5 fails, game over