var myButton = document.querySelector(".myButton");
var theName = document.querySelector(".theName");
var greetingMessage = document.querySelector(".greeting");

function GreetMe(){
    var username = theName.value;
    var message = "Hi, " + username;

    if(username){
        greetingMessage.innerHTML = message;
    }

    Clear();
}
myButton.addEventListener('click', GreetMe);

// clears the text box when button is clicked
function Clear(){
    document.querySelector(".theName").value = " ";
}