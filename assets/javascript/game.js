    // HTML references
    var directions = document.getElementById("directions");
    var correctWord = document.getElementById("correct-word");
    var guessesLeft = document.getElementById("guesses-left");
    var wordsGuessed = document.getElementById("words-guessed");
    var notInWord = document.getElementById("not-in-word");
    
    // array of possible words to guess
    var possibleWords = ["educate", "orange", "jack", "texas", "bellatrix"];
    var wordsWon = [];
    var gameStarted = false;

    // Take your setup code (code that selects your word, creates your initial underscore and word arrays, and move it into a function)
    function pickWord () {
        var thisWord = possibleWords[Math.floor(Math.random() * possibleWords.length)];
        // stores the length of the chosen word 
        return thisWord;
    } 

    var guessingWord = pickWord();
    var wordLength = guessingWord.length;
    var wordArray = Array.from(guessingWord);
    console.log(wordArray);
    var chancesLeft = 5;
    var guessedArray = [];
    var notFirstGame = false;

    // fills underscore array with the length of the word 
    function underscores () {
        // creates an empty array for the number of underscores
        var numUnderscores = [];
        for (var i = 0; i < wordLength; i++) {
            numUnderscores.push("_"); 
        }
        return numUnderscores;
    }

    var underscoreArray = underscores();
    console.log(underscoreArray);
    var userGuess;

    function resetGame () {
        pickWord();
        correctWord.textContent = strArray;
        gameStarted = false;
        chancesLeft = 5;
        guessedArray = [];  
        guessesLeft.textContent = ("Chances left to save chicken little: " + chancesLeft);
        notInWord.textContent = "Guessed Letters: " + guessedArray.join(", ");
        return guessedArray;
    }

    function checkForCorrectGuess () {
        for (var i = 0; i < wordLength; i++){
            if (userGuess ===  wordArray[i]) {
                underscoreArray[i] = wordArray[i];
                correctWord.textContent = underscoreArray.join(" ");
            }
        }       
    };

    function checkforWrongGuess () {
        for (var i = 0; i < wordLength; i++){
            if (wordArray.indexOf(userGuess) == -1
                && userGuess != "Enter" 
                && userGuess != "Escape" && 
                guessedArray.indexOf(userGuess) == -1) {
                    guessedArray.push(userGuess);
                    notInWord.textContent = "Guessed Letters: " + guessedArray.join(", ");
                    chancesLeft--;
                    guessesLeft.textContent = ("Chances left to save chicken little: " + chancesLeft);
            }
        }
    };

    function winOrLose () {
        if (underscoreArray.includes("_")) {
        }
        // if all letters have been guessed,
        // alerts user, includes words in Words Guessed section
        else {
            alert("you won!");
            wordsWon.push(guessingWord);
            wordsGuessed.textContent = "Words you've correctly guessed: " + wordsWon.join(", ");
            notFirstGame 
        }
        if (chancesLeft === 0) {
            alert("you lost, press 'enter' to try again");
            if (userGuess === "Enter") {
            notFirstGame = true;
            resetGame();
            }
        }
    };

    document.onkeyup = function (event) {
        userGuess = event.key;

        if (userGuess === "Enter") {
            gameStarted = true;
            correctWord.textContent = underscoreArray.join(" ");
        }
        if (gameStarted || notFirstGame) {
        checkForCorrectGuess();
        checkforWrongGuess();
        winOrLose();
    }
    };