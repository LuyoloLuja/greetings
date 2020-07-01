var myButton = document.querySelector(".myButton");
var theName = document.querySelector(".theName");
var greetingCounter = document.querySelector(".counter");
var greetingMessage = document.querySelector(".greeting");
var resetButton = document.querySelector(".resetButton");

var greetingInstance = GreetFactory();

function GreetMe() {
    var languages = document.querySelector("input[name='language']:checked");
    if(languages){
    var languageChecked = languages.value;
    var userName = theName.value;

    greetingMessage.innerHTML = greetingInstance.userInput(userName, languageChecked)
    greetingInstance.storedNames(userName);
    greetingCounter.innerHTML = greetingInstance.getCounter();
    
    // TO DO --- clears textbox but breaks incrementing code
    }
   // greetingInstance.clearTextbox(theName);

}
myButton.addEventListener('click', GreetMe);

// window.addEventListener('onload', function(){
//     theName.value = "";
// })
function resetBtn() {
    greetingCounter.innerHTML = 0;
    theName.value = "";
}
resetButton.addEventListener('click', resetBtn);
