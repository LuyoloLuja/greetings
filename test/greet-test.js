describe("The Greet Exercise", function(){
    it("Should greet user in isiXhosa if the user selected isiXhosa", function(){
        var greetings = GreetFactory();
        var message = greetings.userInput("Luyolo", "isixhosa");

        assert.equal(message, "Molo, Luyolo");
    })
    it("Should greet user in English if the user selected English", function(){
        var greetings = GreetFactory();
        var message = greetings.userInput("Athi", "english");

        assert.equal(message, "Hi, Athi");
    })
    it("Should greet user in Afrikaans if the user selected Afrikaans", function(){
        var greetings = GreetFactory();
        var message = greetings.userInput("Yomza", "afrikaans")

        assert.equal(message, "More, Yomza");
    })
    it("Counter should only increment once if username already exists", function(){
        var greetings = GreetFactory();

        greetings.userInput("Luyolo", "isixhosa");
        greetings.userInput("Luyolo", "english");
        greetings.userInput("Luyolo", "afrikaans");

        assert.equal(greetings.setNames(), 1);
    })
    it("Counter should return 3 if 3 different users have been greeted", function(){
        var greetings = GreetFactory();

        greetings.userInput("Luyolo", "isixhosa");
        greetings.userInput("Athi", "english");
        greetings.userInput("Luyolo", "afrikaans");

        assert.equal(greetings.getCounter(), 3);
    })
})
