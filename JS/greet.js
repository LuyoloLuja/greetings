var myButton = document.querySelector(".myButton");
var name = document.querySelector(".theName");
var greetingMessage = document.querySelector(".greeting");

function greetMe(){
    var username = name.value;
    var message = "Hi, " + username;

    greetingMessage.innerHTML = message;
}
myButton.addEventListener('click', greetMe);