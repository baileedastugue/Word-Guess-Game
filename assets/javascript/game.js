    // HTML references
    var directions = document.getElementById("directions");
    var correctWord = document.getElementById("correct-word");
    var guessesLeft = document.getElementById("guesses-left");
    var wordsGuessed = document.getElementById("words-guessed");
    var notInWord = document.getElementById("not-in-word");
    var wordBubble = document.getElementById("word-bubble");
    var background = document.getElementById("game-space");
    
    // array of possible words to guess
    var possibleWords = ["educate", "orange", "jack", "texas", "bellatrix", "pajamas",
                        "coffee", "help", "alligator", "threat", "bee", "horizon", "forest",
                        "friend", "progress", "evening", "captain", "televsion", "record", "predict"];
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
        background.style.backgroundImage = "url('assets/images/background.png')";
        document.getElementById("final-loss").style.display="none"; 
        document.getElementById("second-chicken").style.display="block";  
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
                changeBackground();
            }
        }       
    };

    function changeBackground () {    
            if (chancesLeft === 9){
            background.style.backgroundImage = "url('assets/images/background1.png')";
            }
            if (chancesLeft === 8){
                background.style.backgroundImage = "url('assets/images/background2.png')";
            }
            if (chancesLeft === 7){
                background.style.backgroundImage = "url('assets/images/background3.png')";
            }
            if (chancesLeft === 6){
                background.style.backgroundImage = "url('assets/images/background4.png')";
            }
            if (chancesLeft === 5){
                background.style.backgroundImage = "url('assets/images/background5.png')";
            }
            if (chancesLeft === 4){
                background.style.backgroundImage = "url('assets/images/background6.png')";
            }
            if (chancesLeft === 3){
                background.style.backgroundImage = "url('assets/images/background7.png')";
            }
            if (chancesLeft === 2){
                background.style.backgroundImage = "url('assets/images/background8.png')";
            }
            if (chancesLeft === 1){
                background.style.backgroundImage = "url('assets/images/background9.png')";
            }
            if (chancesLeft === 0) {
                wordBubble.style.display='none';
                document.getElementById("second-chicken").style.display="none";
                document.getElementById("first-chicken").style.display="none";
                background.style.backgroundImage = "url('assets/images/background10.png')";
                document.getElementById("final-loss").style.display="block";
                alert("you lost, press 'enter' to try again");
                notFirstGame = true;
            }
    }

    function checkforWrongGuess () {
        for (var i = 0; i < wordLength; i++){
            if (wordArray.indexOf(userGuess) == -1
                && userGuess != "Enter" 
                && userGuess != "Escape" && 
                guessedArray.indexOf(userGuess) == -1) {
                    guessedArray.push(userGuess);
                    notInWord.textContent = "Guessed Letters: " + guessedArray.join(", ");
                    chancesLeft--;
                    changeBackground();
                    guessesLeft.textContent = ("Chances left to save chicken little: " + chancesLeft);
            }
        }
    };

    function winOrLose () {
        changeBackground();
        if (underscoreArray.includes("_")) {
        }
        // if all letters have been guessed,
        // alerts user, includes words in Words Guessed section
        else {
            wordsWon.push(guessingWord);
            wordsGuessed.textContent = "Words you've correctly guessed: " + wordsWon.join(", ");
            alert("you won! Press 'enter' to play again")  
        }
    };

  
    document.onkeyup = function (event) {
        userGuess = event.key;
        // userGuess = userGuess.toLowerCase();
        if (userGuess === "Enter") {
            gameSetUp();
            gameStarted = true;
            correctWord.textContent = underscoreArray.join(" ");
        }
        // if (notFirstGame) {
        //     document.getElementById("second-chicken").style.display="block";
        //     document.getElementById("first-chicken").style.display="block";
        //     background.style.backgroundImage = "url('assets/images/background.png')"
        //     gameSetUp();
        // }
        if (gameStarted || notFirstGame) {
        wordBubble.style.display='block';
        checkForCorrectGuess();
        checkforWrongGuess();
        winOrLose();
    }
    };