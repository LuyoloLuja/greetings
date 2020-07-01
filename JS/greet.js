var myButton = document.querySelector(".myButton");
var theName = document.querySelector(".theName");
var greetingCounter = document.querySelector(".counter");
var greetingMessage = document.querySelector(".greeting");
var resetButton = document.querySelector(".resetButton");

var greetingInstance = GreetFactory();

function GreetMe() {
    var languages = document.querySelector("input[name='language']:checked");
    var languageChecked = languages.value;
    var userName = theName.value;

    greetingMessage.innerHTML = greetingInstance.userInput(userName, languageChecked)
    greetingInstance.counter(userName);
    greetingCounter.innerHTML = greetingInstance.getCounter();
    
//   ClearTextbox();
}
myButton.addEventListener('click', GreetMe);

// clears the text box when button is clicked
// function ClearTextbox() {
//     document.querySelector(".theName").value = "";
// }

// resetting the counter
function resetBtn() {
    greetingCounter.innerHTML = 0;
}
resetButton.addEventListener('click', resetBtn);