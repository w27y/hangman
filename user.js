const form = document.getElementById('form');
const log = document.getElementById('log');
const score = document.getElementById('score');
let resultA = document.getElementById('resultA');
let resultB = document.getElementById('resultB');
let resultC = document.getElementById('resultC');
let resultD = document.getElementById('resultD');
let resultE = document.getElementById('resultE');
let resultF = document.getElementById('resultF');
let resultG = document.getElementById('resultG');
let resultH = document.getElementById('resultH');
let resultI = document.getElementById('resultI');
let resultJ = document.getElementById('resultJ');
let resultK = document.getElementById('resultK');
let resultL = document.getElementById('resultL');
let resultM = document.getElementById('resultM');
let resultN = document.getElementById('resultN');
let resultO = document.getElementById('resultO');
let resultO2 = document.getElementById('resultO2');
let resultP = document.getElementById('resultP');
let resultQ = document.getElementById('resultQ');
let resultR = document.getElementById('resultR');
let resultS = document.getElementById('resultS');
let resultT = document.getElementById('resultT');
let resultU = document.getElementById('resultU');
let resultV = document.getElementById('resultV');
let resultW = document.getElementById('resultW');
let resultX = document.getElementById('resultX');
let resultY = document.getElementById('resultY');
let resultZ = document.getElementById('resultZ');
let wordCompletion = 1;


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

          if (letterResult === "R" && restultR != "R"){
            console.log("there is a match");
            resultR.textContent = "R";
            wordCompletion += 1;
            scoreCalculate(wordCompletion);
            
          }
          else if (letterResult === "O"){
            console.log("there is a match");
            resultO.textContent = "O";
            resultO2.textContent = "O";
            wordCompletion += 1;
            scoreCalculate(wordCompletion);
          } 

          else if (letterResult === "A"){
            console.log("there is a match");
            resultA.textContent = "A";
            wordCompletion += 1;
            scoreCalculate(wordCompletion);
          } 

          else if (letterResult === "D"){
            console.log("there is a match");
            resultD.textContent = "D";
            wordCompletion += 1;
            scoreCalculate(wordCompletion);
          } 

          else if (letterResult === "H"){
            console.log("there is a match");
            resultH.textContent = "H";
            wordCompletion += 1;
            scoreCalculate(wordCompletion);
          } 

          else if (letterResult === "U"){
            console.log("there is a match");
            resultU.textContent = "U";
            wordCompletion += 1;
            scoreCalculate(wordCompletion);
          } 

          else if (letterResult === "S"){
            console.log("there is a match");
            resultS.textContent = "S";
            wordCompletion += 1;
            scoreCalculate(wordCompletion);
          } 

          else if (letterResult === "E"){
            console.log("there is a match");
            resultE.textContent = "E";
            wordCompletion += 1;
            scoreCalculate(wordCompletion);
          } 

          else {
            console.log("letter fail");
          }

        }
    form.reset();
  }
  



  