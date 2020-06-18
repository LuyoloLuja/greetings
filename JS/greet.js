var myButton = document.querySelector(".myButton");
var theName = document.querySelector(".theName");
var greetingCounter = document.querySelector(".counter");
var greetingMessage = document.querySelector(".greeting");
var count = 1;

function GreetMe(){
    var languages = document.querySelector("input[name='language']:checked");
    var languageChecked = languages.value;
    var username = theName.value;

    if(languageChecked){
        if(languageChecked === "english"){
            greetingMessage.innerHTML = "Hi, " + username;
        } else if(languageChecked === "afrikaans"){
            greetingMessage.innerHTML = "More, " + username;
        } else if(languageChecked === "isixhosa"){
            greetingMessage.innerHTML = "Molo, " + username;
        }
    }
    languageChecked.value = count;
    greetingCounter.innerHTML = count++;

    ClearTextbox();
}
myButton.addEventListener('click', GreetMe);

// clears the text box when button is clicked
function ClearTextbox(){
    document.querySelector(".theName").value = " ";
}