var myButton = document.querySelector(".myButton");
var theName = document.querySelector(".theName");
var greetingCounter = document.querySelector(".counter");
var greetingMessage = document.querySelector(".greeting");
var resetButton = document.querySelector(".resetButton");

var namesGreeted = {}
var count = 0;

function GreetMe() {
    var languages = document.querySelector("input[name='language']:checked");
    var languageChecked = languages.value;
    var username = theName.value;

    if (languageChecked === "english") {
        greetingMessage.innerHTML = "Hi, " + username;
    } else if (languageChecked === "afrikaans") {
        greetingMessage.innerHTML = "More, " + username;
    } else if (languageChecked === "isixhosa") {
        greetingMessage.innerHTML = "Molo, " + username;
    }
    // counter not working as it should --- should increment only when username is not on the list
    if (theName.value !== " " && namesGreeted[theName] === undefined) {
        count++;
        namesGreeted[theName] = 0;
        greetingCounter.innerHTML = count;
    }
    localStorage.setItem('timesGreeted', JSON.stringify(count));

    ClearTextbox();
}
myButton.addEventListener('click', GreetMe);

// clears the text box when button is clicked
function ClearTextbox() {
    document.querySelector(".theName").value = " ";
}

// resetting the counter
function resetBtn() {
    greetingCounter.innerHTML = 0;
}
resetButton.addEventListener('click', resetBtn);