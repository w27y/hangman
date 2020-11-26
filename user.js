main();

//These are the controls of the game
function main () {
    const submit = document.getElementById('submit');
    submit.addEventListener('click',function(){
        createTable();
        console.log("User Clicked Submit");
    });
}