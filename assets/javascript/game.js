    // HTML references
    var directions = document.getElementById("directions");
    var correctWord = document.getElementById("correct-word");
    var guessesLeft = document.getElementById("guesses-left");
    var wordsGuessed = document.getElementById("words-guessed");
    var notInWord = document.getElementById("not-in-word");
    var wordBubble = document.getElementById("word-bubble");
    
    // array of possible words to guess
    var possibleWords = ["educate", "orange", "jack", "texas", "bellatrix", "pajamas",
                        "coffee", "help", "alligator", "threat", "bee", "horizon", "forest",
                        "friend", "progress", "evening"];
    var wordsWon = [];
    var gameStarted = false;
    var userGuess = "";
    var guessingWord = "";
    var wordLength = "";
    var wordArray = [];
    var notFirstGame = false;
    var underscoreArray = [];


    // Take your setup code (code that selects your word, creates your initial underscore and word arrays, and move it into a function)
    function pickWord () {
        var thisWord = possibleWords[Math.floor(Math.random() * possibleWords.length)];
        // stores the length of the chosen word 
        return thisWord;
    } 
    


    // fills underscore array with the length of the word 
    function underscores () {
        // creates an empty array for the number of underscores
        var numUnderscores = [];
        for (var i = 0; i < wordLength; i++) {
            numUnderscores.push("_"); 
        }
        return numUnderscores;
    }

    function gameSetUp (){
        guessingWord = pickWord();
        wordLength = guessingWord.length;
        underscoreArray = underscores();
        wordArray = Array.from(guessingWord);
        chancesLeft = 10;
        guessedArray = [];
        notInWord.textContent = "Guessed Letters: " 
        guessesLeft.textContent = ("Chances left to save chicken little: " + chancesLeft);  
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
            wordsWon.push(guessingWord);
            wordsGuessed.textContent = "Words you've correctly guessed: " + wordsWon.join(", ");
            alert("you won! Press 'enter' to play again");
            // if (userGuess === "Enter") {
                notFirstGame = true;
                gameSetUp();
            // }
        }
        if (chancesLeft === 0) {
            alert("you lost, press 'enter' to try again");
            // if (userGuess === "Enter") {
                notFirstGame = true;
                gameSetUp();
            // }
        }
    };

    gameSetUp();
    document.onkeyup = function (event) {
        userGuess = event.key;
        // userGuess = userGuess.toLowerCase();
        if (userGuess === "Enter") {
            
            gameStarted = true;
            wordBubble.style.display='block';
            correctWord.textContent = underscoreArray.join(" ");
        }
        if (gameStarted || notFirstGame) {
        checkForCorrectGuess();
        checkforWrongGuess();
        winOrLose();
    }
    };