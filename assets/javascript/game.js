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
var wordsWon = [];
var gameStarted = false;
var userGuess = "";
var guessingWord = "";
var wordLength = "";
var wordArray = [];
var notFirstGame = false;
var underscoreArray = [];
var backgrounds = ['assets/images/background10.png', 'assets/images/background9.png', 'assets/images/background8.png', 'assets/images/background7.png', 'assets/images/background6.png', 'assets/images/background5.png', 'assets/images/background4.png', 'assets/images/background3.png', 'assets/images/background2.png', 'assets/images/background1.png', 'assets/images/background.png']; 


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
    background.style.backgroundImage = "url('assets/images/background.png')";
    document.getElementById("final-loss").style.display="none"; 
    document.getElementById("second-chicken").style.display="block"; 
    
    // notInWord.textContent = "Guessed Letters: " 
    // guessesLeft.textContent = ("Chances left to save chicken little: " + chancesLeft);  
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
        background.style.backgroundImage = "url(" + backgrounds[chancesLeft] + ")";
    }
    if (chancesLeft === 0) {
        wordBubble.style.display='none';
        background.style.backgroundImage = "url(" + backgrounds[chancesLeft] + ")";
        document.getElementById("second-chicken").style.display="none";
        document.getElementById("first-chicken").style.display="none";
        document.getElementById("final-loss").style.display="block";
        notFirstGame = true;
    }
}

function validGuess () {
    if (userGuess.match(/^[a-zA-Z]*$/) ) {
        var validGuess = true;
        console.log(validGuess);
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
        wordsGuessed.textContent = "Words you've correctly guessed: " + wordsWon.join(", ");
    }
};


document.onkeyup = function (event) {
    userGuess = event.key;
    if (userGuess === "Enter") {
        gameSetUp();
        gameStarted = true;
        correctWord.textContent = underscoreArray.join(" ");
    }   
    else if (gameStarted) {
        console.log(chancesLeft);    
        wordBubble.style.display='block';
        checkForCorrectGuess();
        checkforWrongGuess();
        winOrLose();
}
};