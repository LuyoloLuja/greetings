function GreetFactory() {
    var storedValues = {};
    var incrementCounter = 0;

    function userInput(userName, languageSelected) {
        if (languageSelected === "english") {
            return "Hi, " + userName;
        } else if (languageSelected === "afrikaans") {
            return "More, " + userName;
        } else if (languageSelected === "isixhosa") {
            return "Molo, " + userName;
        }
    }

    function storedNames(theName){
        if(storedValues[theName] === undefined){
         //   incrementCounter++;
            storedValues[theName] = 0;
        }
    }

    function getCounter(){
        return Object.keys(storedValues).length;
    }
    
    return {
        userInput,
        storedNames,
        getCounter,
    }
}