var myButton = document.querySelector(".myButton");
var theName = document.querySelector(".theName");
var greetingMessage = document.querySelector(".greeting");

function GreetMe(){
    var username = theName.value;
    var message = "Hi, " + username;

    if(username){
        greetingMessage.innerHTML = message;
    }else {
        greetingMessage.innerHTML = "Hi enter your name"
    }

    ClearTextbox();
}
myButton.addEventListener('click', GreetMe);

// clears the text box when button is clicked
function ClearTextbox(){
    document.querySelector(".theName").value = " ";
}