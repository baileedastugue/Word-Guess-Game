    /* variable to hold user incorrect guesses */
    var incorrectGuesses = [];
    /* variable to hold number of wins */
    var numWins = 0;
    /* variable to hold words correctly guessed */
    var correctWords = [];
    /* variable to hold number of chances to corectly guess */
    var chancesLeft = 10;

    var directions = document.getElementById("directions");
    var correctWord = document.getElementById("correct-word");
    
    var possibleWords = ["apple", "banana", "jack"];
    var thisWord = possibleWords[Math.floor(Math.random() * possibleWords.length)];
    console.log(possibleWords);
    console.log(thisWord);

    var numUnderscores = [];

    function underscores (thisWord) {
        var wordLength = thisWord.length;
        console.log(wordLength);
        for (var i = 0; i < wordLength; i++) {
            numUnderscores.push("_ "); 
            }
            console.log(numUnderscores);
    }

    underscores(thisWord);

