    /* variable to hold user incorrect guesses */
    var incorrectGuesses = [];
    /* variable to hold number of wins */
    var numWins = 0;
    /* variable to hold words correctly guessed */
    var correctGuesses = [];
    /* variable to hold number of chances to corectly guess */
    var chancesLeft = 10;

    // HTML references
    var directions = document.getElementById("directions");
    var correctWord = document.getElementById("correct-word");
    

    var possibleWords = ["apple", "banana", "jack", "texas", "bellatrix"];
    var thisWord = possibleWords[Math.floor(Math.random() * possibleWords.length)];
    console.log(possibleWords);
    console.log(thisWord);
    var wordLength = thisWord.length;

    var numUnderscores = [];

    function underscores () {
        for (var i = 0; i < wordLength; i++) {
            numUnderscores.push("_"); 
            }
        var strUnderscores = numUnderscores.join(" ");
        return strUnderscores;
    }

    var num = underscores();
    correctWord.textContent = num;

    document.onkeyup = function(event) {
        var userGuess = event.key;
        for (var i = 0; i < correctWord; i++) {
            console.log([i]);
        }
    }
    


