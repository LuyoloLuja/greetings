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

        greetings.setNames("Luyolo", "isixhosa");
        greetings.setNames("Luyolo", "english");
        greetings.setNames("Luyolo", "afrikaans");

        assert.equal(1, greetings.getCounter());
    })
    it("Counter should return number of users that have been greeted", function(){
        var greetings = GreetFactory();

        greetings.setNames("Luyolo", "isixhosa");
        greetings.setNames("Luyolo", "isixhosa");
        greetings.setNames("Athi", "english");
        greetings.setNames("Athi", "english");
        greetings.setNames("Akhanya", "afrikaans");
        greetings.setNames("Akhanya", "afrikaans");

        assert.equal(3, greetings.getCounter());
    })
    it("Counter should not increment if textbox and radio buttons are empty", function(){
      var greetings = GreetFactory();

      greetings.setNames("", "");
      assert.equal(0, greetings.getCounter());
    })
})
