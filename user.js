const form = document.getElementById('form');
const log = document.getElementById('log');
let resultLine = document.getElementById('resultLine');
form.addEventListener('submit', logSubmit);

function logSubmit(event) {
    let letterUser = document.getElementsByName("letter")[0].value;
    let letterResult = letterUser.toUpperCase();
    log.textContent = `You entered: ${letterResult}`;
    event.preventDefault();
    console.log(letterUser.toUpperCase());
    wordCheck(letterResult);

        //Static Entry for Now
        function wordCheck(letterResult) {
          if (letterResult === "R"){
            console.log("there is a match");
            resultLine.textContent = "R _ _ _ _ _ _ _ _";
            
          }

        }
    form.reset();
  }
  



  