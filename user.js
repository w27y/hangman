//Game Words, placeholder list, # of tries, and tried letter list Array declarations
    const gameWordList = ["ROADHOUSE", "FALCOR", "SAMSONITE", "TOMATUM", "LUNCHABOX"];
    let listArray = [];
    let failureArray = [];
    let numberTries = 5; 

//Random Select a Word
    const gameWord = Math.floor(Math.random() * gameWordList.length);
    let selectedWord = gameWordList[gameWord];
    let selectedWordArray = Array.from(selectedWord);
    console.log("array is:  " + selectedWordArray);

//Create cell placeholders for each letter of the selected word, lists tries
    let selectedWordLength = selectedWordArray.length;
    console.log("Word length is:  " + selectedWordLength);
    let htmlWord = document.getElementById('htmlWord');
    let placeHolder = "_ ";
    selectedWordArray.forEach(listBuild);
    function listBuild() {
      listArray.push(placeHolder);
    }

    htmlWord.textContent = listArray.join(" ");
    tries.textContent = numberTries;

//User Input
    form.addEventListener('submit', logSubmit);

    function logSubmit(event) {
        let letterUser = document.getElementsByName("letter")[0].value;
        let letterResult = letterUser.toUpperCase();
        log.textContent = `You entered: ${letterResult}`;
        event.preventDefault();
        console.log("User typed:  " + letterResult);
        wordCheck(letterResult);
        clearLetter();
        function clearLetter() {  
        document.getElementById('letter').value = "";
        }
        
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
      indexes.forEach(showLetter);
      function showLetter() {
        if (indexes.includes(0)) {
        listArray[0] = selectedWordArray[0];
        }
        if (indexes.includes(1)) {
          listArray[1] = selectedWordArray[1];
          }
        if (indexes.includes(2)) {
          listArray[2] = selectedWordArray[2];
          }
        if (indexes.includes(3)) {
          listArray[3] = selectedWordArray[3];
          }
        if (indexes.includes(4)) {
          listArray[4] = selectedWordArray[4];
          }
        if (indexes.includes(5)) {
          listArray[5] = selectedWordArray[5];
          }
        if (indexes.includes(6)) {
          listArray[6] = selectedWordArray[6];
          }
        if (indexes.includes(7)) {
          listArray[7] = selectedWordArray[7];
          }
        if (indexes.includes(8)) {
          listArray[8] = selectedWordArray[8];
          }
        if (indexes.includes(9)) {
          listArray[9] = selectedWordArray[9];

        }
      }
      htmlWord.textContent = listArray.join(" ");
      console.log(listArray);
      checkWinner();

    }

//Reduce number of tries if no match
    function letterFail(letterResult) {
      let failLetters = document.getElementById('lettersTried');
      failureArray.push(letterResult);
      failLetters.textContent = failureArray.join(" , ");
      numberTries = numberTries - 1;
      tries.textContent = numberTries;
      endGame();
    }

//If word is completed, alert user
    function checkWinner() {
      if (listArray.includes("_ ")) {
        console.log("Still Playing");
      }
      else {
        console.log("Winner");
        if(!alert('You Win!!!')){window.location.reload();}
      }
    }

//If word is not completed after 5 fails, game over
    function endGame() {
      if (numberTries == 0) {
        if(!alert('You Lose!!!' + " The word was: " + selectedWord)){window.location.reload();}
      }
    }