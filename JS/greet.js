var myButton = document.querySelector(".myButton");
var theName = document.querySelector(".theName");
var greetingCounter = document.querySelector(".counter");
var greetingMessage = document.querySelector(".greeting");
var resetButton = document.querySelector(".resetButton");

var greetedName;

if(localStorage['name']){
    greetedName = JSON.parse(localStorage.getItem('name'));
}

var greetingInstance = GreetFactory(greetedName);

function GreetMe() {
    var languages = document.querySelector("input[name='language']:checked");

    var languageChecked = languages.value;
    var userName = theName.value;
    if(languages){

        greetingMessage.innerHTML = greetingInstance.userInput(userName, languageChecked)
        greetingInstance.setNames(userName)
        localStorage['name'] = JSON.stringify(greetingInstance.getNames())
        greetingCounter.innerHTML = greetingInstance.getCounter();
    }
}
myButton.addEventListener('click', GreetMe);

window.addEventListener('load', function(){
    greetingCounter.innerHTML = greetingInstance.getCounter();
})

function resetBtn() {
    greetingCounter.innerHTML = 0;
    theName.value = "";
}
resetButton.addEventListener('click', resetBtn);
