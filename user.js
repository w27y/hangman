//Game Words, placeholder list, and tried letter list Array declarations
    const gameWordList = ["ROUDHOUSE", "FALCOR", "SAMSONITE", "KILOMETORY"];
    let listArray = [];
    let failureArray = [];

//Random Select a Word
    const gameWord = Math.floor(Math.random() * gameWordList.length);
    let selectedWord = gameWordList[gameWord];
    let selectedWordArray = Array.from(selectedWord);
    console.log("array is:  " + selectedWordArray);

//Create cell placeholders for each letter of the selected word
    let selectedWordLength = selectedWordArray.length;
    console.log("Word length is:  " + selectedWordLength);
    let htmlWord = document.getElementById('word');
    let placeHolder = "_ ";
    listArray.push(placeHolder.repeat(selectedWordLength));
    htmlWord.textContent = listArray;

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
        letterSuccess(letterResult);
    }
      else {
        console.log("Letter didn't match");
        letterFail(letterResult);
      }
    }

//Print letter if matched
    function letterSuccess(letterResult) {
      function getAllIndexes(arr, val) {
        let indexes = [], i = -1;
        while ((i = arr.indexOf(val, i+1)) != -1){
          indexes.push(i);
        }
        return indexes;
      }
      let indexes = getAllIndexes(selectedWord, letterResult);
      console.log(indexes);
      listArray.push[0] = letterResult;
      console.log(listArray);
      
      


    }






//draw body part if no match
    function letterFail(letterResult) {
      let failLetters = document.getElementById('lettersTried');
      failureArray.push(letterResult);
      failLetters.textContent = failureArray;
    }

//If word is completed, move to next word and increase score

//If word is not completed after 5 fails, game over