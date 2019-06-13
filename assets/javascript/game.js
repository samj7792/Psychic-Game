//Creates an array that lists out all options for the computer to choose from.
var compChoices = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

// Randomly Chooses a choice from the compChoices array. This is the Computer's guess.
var compGuess = compChoices[Math.floor(Math.random() * compChoices.length)]; 

console.log(compGuess)

var wins = 1;

var losses = 1;

var lives = 8;


// This function is run whenever the user presses a key.
document.onkeyup = function(event) {

    // Determines which key was pressed by user.
    var userGuess = event.key;

    console.log(userGuess);

    // var userGuessLower = userGuess.toLowerCase;

    if (userGuess === compGuess) {
        document.getElementById("winCount").innerHTML = wins++;
        compGuess = compChoices[Math.floor(Math.random() * compChoices.length)]; 
        console.log(compGuess);
    }

    else {
        document.getElementById("guessCount").innerHTML = lives--;
    }

}

