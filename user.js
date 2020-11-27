const form = document.getElementById('form');
const log = document.getElementById('log');
form.addEventListener('submit', logSubmit);

function logSubmit(event) {
    let letterUser = document.getElementsByName("letter")[0].value;
    let letterResult = letterUser.toUpperCase();
    log.textContent = `You entered: ${letterResult}`;
    event.preventDefault();
    console.log(letterUser.toUpperCase());
    form.reset();
  }
  



  