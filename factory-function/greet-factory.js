function GreetFactory(names) {
    var storedValues = names || {};

    function userInput(userName, languageSelected) {
        if (languageSelected === "english") {
            return "Hi, " + userName;
        } else if (languageSelected === "afrikaans") {
            return "More, " + userName;
        } else if (languageSelected === "isixhosa") {
            return "Molo, " + userName;
        }
    }

    function setNames(theName) {

        if (theName) {
            if (storedValues[theName] === undefined) {
                storedValues[theName] = 0;
            }
        }
    }
    
    function getNames() {
        return storedValues;
    }

    function getCounter() {
        return Object.keys(storedValues).length;
    }

    return {
        userInput,
        setNames,
        getCounter,
        getNames,
    }
}
