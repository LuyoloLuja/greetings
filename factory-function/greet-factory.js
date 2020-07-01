function GreetFactory(names) {
    var storedValues = names || {};
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

    function setNames(theName){
        
        if(theName){
        if(storedValues[theName] === undefined){
         //   incrementCounter++;
            storedValues[theName] = 0;
        }
    }
    }

    function errorMessages(name, lang){
        if(!name && lang === null){
            return "Please enter your name and select lang";
        }else if(!name){
            return "PLease enter your name";
        }else if(lang === null){
            return "Please select a language";
        }
    }

    function getNames(){
        return storedValues;
    }

    function getCounter(){
        return Object.keys(storedValues).length;
    }

    return {
        userInput,
        setNames,
        getCounter,
        getNames,
        errorMessages
    }
}