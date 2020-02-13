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
        return numUnderscores;
    }

    var underscoreHolder = underscores();

    var wordArray = Array.from(thisWord);
    var underscoreArray = Array.from(underscoreHolder);
    
    
    var incorrectGuesses = -1;
    var incrorrectArray = [];
    var wordsWon = [];

    document.onkeyup = function(event) {
        var userGuess = event.key;
        for (var i = 0; i < wordLength; i++){
            if (userGuess ===  wordArray[i]) {
                underscoreArray[i] = wordArray[i];
            }
        }
        if (wordArray.indexOf(userGuess) == -1) {
            incorrectGuesses++;
            console.log("Number of incorrect guesses: " + incorrectGuesses);
            incrorrectArray.push(userGuess);
            console.log("Incorrect guesses: " + incrorrectArray);
        }
        var strArray = underscoreArray.join(" ");
        correctWord.textContent = strArray;
        
        if (underscoreArray === wordArray) {
            console.log("you won!");
            wordsWon.push(thisWord);
            console.log(wordsWon);
        }
        var chancesLeft = 10 - incorrectGuesses;
        console.log("Chances left to save chicken little: " + chancesLeft);
    }



