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

    var languageChecked = "";

    if (languages) {
      languageChecked = languages.value;
    }

    var userName = theName.value;

   if (languageChecked && userName) {
        var upperCaseName = userName.charAt(0).toUpperCase() + userName.slice(1).toLowerCase();
        greetingMessage.innerHTML = greetingInstance.userInput(upperCaseName, languageChecked);
        greetingInstance.setNames(upperCaseName);
        localStorage['name'] = JSON.stringify(greetingInstance.getNames());
        greetingCounter.innerHTML = greetingInstance.getCounter();
   }else {
      greetingMessage.innerHTML = greetingInstance.errorHandler(upperCaseName, languageChecked);
   }

}
myButton.addEventListener('click', GreetMe);

window.addEventListener('load', function () {
    greetingCounter.innerHTML = greetingInstance.getCounter();
})

function resetBtn() {
    greetingCounter.innerHTML = 0;
    localStorage.clear();
}
resetButton.addEventListener('click', resetBtn);
