var letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

var wins = 0;
var losses = 0; 
var guesses = 10; 
var guessesLeft = 10; 
var guessedLetters = []; 



computerGuess();

document.onkeyup = function(event) {
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
    var check = letters.includes(userGuess);

    if (check === false) {
        alert("Not a valid guess. I'm thinking of a LETTER! Try again.");
        return false;
    } else if (check === true) {
        guessesLeft--;
        guessedLetters.push(userGuess);
        updateGuessesLeft();
        updateGuessesSoFar();

        // if you win, wins will update and game will reset

        if (guessesLeft > 0) {
            if (userGuess == computerGuess) {
                wins++;
                document.querySelector('#wins').innerHTML = "Wins: " + wins;
                userGuess = userGuess.toUpperCase();
                alert("You are psychic! The letter was: " + userGuess);
                reset();
                
            }
            // if you lose, loses will update and game will reset 
        } else if (guessesLeft == 0) {
            losses++;
            document.querySelector('#losses').innerHTML = "Losses: " + losses;
            alert("You're definitely not psychic. Try again!");
            reset();
        }
    }

};



    

function updateGuessesLeft() {
    // Here we are grabbing the HTML element and setting it equal to the guessesLeft. (i.e. guessesLeft will get displayed in HTML)
    document.querySelector('#guessLeft').innerHTML = "Guesses left: " + guessesLeft;
};


function updateGuessesSoFar() {
    // Here we take the guesses the user has tried -- then display it as letters separated by commas. 
    document.querySelector('#let').innerHTML = "Your Guesses so far: " + guessedLetters.join(', ');
};
// Function will be called when we reset everything
var reset = function() {
    totalGuesses = 10;
    guessesLeft = 10;
    guessedLetters = [];

    updateGuessesLeft();
    updateGuessesSoFar();
    updateComputerGuess();
}

function computerGuess() {
    computerGuess = letters[Math.floor(Math.random() * letters.length)];
    console.log(computerGuess);
}

function updateComputerGuess() {
    this.computerGuess = this.letters[Math.floor(Math.random() * letters.length)];
    console.log(computerGuess);
};