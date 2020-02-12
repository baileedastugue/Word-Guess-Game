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
    
    // array of possible words to guess
    var possibleWords = ["educate", "orange", "jack", "texas", "bellatrix"];
    // randomly pick a word from the array
    var thisWord = possibleWords[Math.floor(Math.random() * possibleWords.length)];
    console.log(possibleWords);
    console.log(thisWord);
    // stores the length of the chosen word 
    var wordLength = thisWord.length;

    // creates an empty array for the number of underscores in an array
    var numUnderscores = [];
    // function that 
    function underscores () {
        for (var i = 0; i < wordLength; i++) {
            numUnderscores.push("_"); 
            }
        var strUnderscores = numUnderscores.join(" ");
        return strUnderscores;
    }
    
    var num = underscores();
    correctWord.textContent = num;
    var partialWord = correctWord.textContent;

    document.onkeyup = function(event) {
        var userGuess = event.key;
        // for (var i = 0; i < wordLength; i++){
            var part1 = partialWord.substr(0,3);
            var part2 = partialWord.substring(3, partialWord.length-2);
            if (userGuess ===  thisWord.charAt(2)) {
                    partialWord = part1 + " " + thisWord.charAt(2) + " " + part2;
            }
            console.log(partialWord);
        // }
        // correctWord.textContent = partialWord;
    }


    
    


