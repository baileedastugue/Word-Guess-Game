    // HTML references
    var directions = document.getElementById("directions");
    var correctWord = document.getElementById("correct-word");
    var guessesLeft = document.getElementById("guesses-left");
    var wordsGuessed = document.getElementById("words-guessed");
    
    // array of possible words to guess
    var possibleWords = ["educate", "orange", "jack", "texas", "bellatrix"];
    // randomly pick a word from the array
    var thisWord = possibleWords[Math.floor(Math.random() * possibleWords.length)];
    console.log(thisWord);
    // stores the length of the chosen word 
    var wordLength = thisWord.length;

    // creates an empty array for the number of underscores
    var numUnderscores = [];
    // fills underscore array with the length of the word 
    function underscores () {
        for (var i = 0; i < wordLength; i++) {
            numUnderscores.push("_"); 
            }
        return numUnderscores;
    }

    var underscoreHolder = underscores();
    var underscoreArray = Array.from(underscoreHolder);

    var wordArray = Array.from(thisWord);
    
    guessesLeft.textContent = ("Chances left to save chicken little: " + 10);
    
    var chancesLeft = 10;
    var incrorrectArray = [];
    var wordsWon = [];

    document.onkeyup = function(event) {
        var userGuess = event.key;
        for (var i = 0; i < wordLength; i++){
            if (userGuess ===  wordArray[i]) {
                underscoreArray[i] = wordArray[i];
                chancesLeft.textContent = ("Chances left to save chicken little: " + chancesLeft);
            }
        }
        if (wordArray.indexOf(userGuess) == -1) {
            incrorrectArray.push(userGuess);
            console.log("Incorrect guesses: " + incrorrectArray);
            chancesLeft--;
            guessesLeft.textContent = ("Chances left to save chicken little: " + chancesLeft);
           
        }
        // updates underscores on page to reflect key strokes
        var strArray = underscoreArray.join(" ");
        correctWord.textContent = strArray;

        // tests whether all letters have been guessed
        if (underscoreArray.includes("_")) {
        }
        // if all letters have been guessed,
        // alerts user, includes words in Words Guessed section
        else {
            alert("you won!");
            wordsWon.push(thisWord);
            wordsGuessed.textContent = "Words you've correctly guessed: " + wordsWon;
        }
    }



