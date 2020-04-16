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
                    "friend", "progress", "evening", "captain", "television", "record", "predict", "slippers",
                    "feathers", "cowboy", "tacos", "ouch", "blanket", "sunset"];
var backgrounds = ['assets/images/background10.png', 'assets/images/bg9.png', 'assets/images/bg8.png', 'assets/images/bg7.png', 'assets/images/bg6.png', 'assets/images/bg5.png', 'assets/images/bg4.png', 'assets/images/bg3.png', 'assets/images/bg2.png', 'assets/images/bg1.png', 'assets/images/bg.png']; 
var wordsWon = [];
var wordArray = [];
var userGuess = "";
var guessingWord = "";
var wordLength = "";
var gameStarted = false;
var notFirstGame = false;


// Setup code - randomly picks and returns a word
function pickWord () {
    var thisWord = possibleWords[Math.floor(Math.random() * possibleWords.length)];
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
    // guessing word is selected and stored in an array
    guessingWord = pickWord();
    wordArray = Array.from(guessingWord);
    wordLength = guessingWord.length;

    // underscore array is created
    underscoreArray = underscores();
    
    // chances left is set and empty guessed array is created
    chancesLeft = 10;
    guessedArray = [];

    // sets up game play board
    document.getElementById("bg").src = "assets/images/bg.png";
    document.getElementById("final-loss").style.display="none"; 
    document.getElementById("final-win").style.display="none"; 
    document.getElementById("correct-word").style.display="unset";
    
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
    if (chancesLeft > 0){   
        document.getElementById("bg").src = backgrounds[chancesLeft];
    }
    else {
        document.getElementById("bg").src = backgrounds[0];
        document.getElementById("final-loss").style.display="block";
        document.getElementById("correct-word").style.display="none";
        notFirstGame = true;
    }
}

function checkforWrongGuess () {
    for (var i = 0; i < wordLength; i++){
        if (wordArray.indexOf(userGuess) === -1 && 
            userGuess.match(/^[a-zA-Z]*$/) &&
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
        document.getElementById("final-win").style.display="block";
        document.getElementById("correct-word").style.display="none";
        wordsGuessed.textContent = "Words you've correctly guessed: " + wordsWon.join(", ");
    }
};

function adjustFont() {
    document.getElementById("correct-word").classList.remove("small", "medium", "large");
    if (wordLength <= 5) {
        document.getElementById("correct-word").classList.add("small");
    }
    else if (wordLength <= 8) {
        document.getElementById("correct-word").classList.add("medium");
    }
    else {
        document.getElementById("correct-word").classList.add("large");
    }
}


document.onkeyup = function (event) {
    userGuess = event.key;
    if (userGuess === "Enter") {
        gameSetUp();
        adjustFont();
        gameStarted = true;
        correctWord.textContent = underscoreArray.join(" ");
    }   
    else if (gameStarted) {
        adjustFont();
        checkForCorrectGuess();
        checkforWrongGuess();
        winOrLose();
}
};