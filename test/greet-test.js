describe("The Greet Exercise", function(){
    it("Should greet user in isiXhosa if the user selected isiXhosa as language", function(){
        var greetings = GreetFactory();

        var message = greetings.userInput("Luyolo", "isixhosa");
        assert.equal(message, "Molo, Luyolo");
    })
})