var myButton = document.querySelector(".myButton");
var theName = document.querySelector(".theName");
var greetingCounter = document.querySelector(".counter");
var greetingMessage = document.querySelector(".greeting");
var resetButton = document.querySelector(".resetButton");

var greetedName;

if (localStorage['name']) {
    greetedName = JSON.parse(localStorage.getItem('name'));
}

var greetingInstance = GreetFactory(greetedName);

function GreetMe() {
    var languages = document.querySelector("input[name='language']:checked");

    var languageChecked = languages.value;
    var userName = theName.value;
   if (languageChecked) {
        var upperName = userName.charAt(0).toUpperCase() + userName.slice(1);
        greetingMessage.innerHTML = greetingInstance.userInput(upperName, languageChecked)
        greetingInstance.setNames(upperName)
        localStorage['name'] = JSON.stringify(greetingInstance.getNames())
        greetingCounter.innerHTML = greetingInstance.getCounter();

    }

    greetingMessage.innerHTML = greetingInstance.errorMessages(userName, languageChecked)
//     if(userName === "" && languageChecked === null){
//         greetingMessage.innerHTML = "Please enter your name and select a language";
//     }else if(userName === ""){
//         greetingMessage.innerHTML = "Please enter your name";
//     }else if(languageChecked === null){
//         greetingMessage.innerHTML = "Please select a language";
//     }
    
}
myButton.addEventListener('click', GreetMe);

window.addEventListener('load', function () {
    greetingCounter.innerHTML = greetingInstance.getCounter();
})

function resetBtn() {
    greetingCounter.innerHTML = 0;
}
resetButton.addEventListener('click', resetBtn);
