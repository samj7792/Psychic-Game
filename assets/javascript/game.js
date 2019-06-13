//Creates an array that lists out all options for the computer to choose from.
var compChoices = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

// Randomly Chooses a choice from the compChoices array. This is the Computer's guess.
var compGuess = compChoices[Math.floor(Math.random() * compChoices.length)]; 

console.log("comp " + compGuess);

var wins = 0;

var losses = 0;

var lives = 9;


// This function is run whenever the user presses a key.
document.onkeyup = function(event) {

    // Determines which key was pressed by user.
    var userGuess = event.key;

    console.log(userGuess);

    // var userGuessLower = userGuess.toLowerCase;

    // statement for if user guesses correctly
    if (userGuess === compGuess) {

        //wins increment by 1
        wins++;
        //winCount displays new wins value
        document.getElementById("winCount").innerHTML = wins;
        // computer makes a new random choice
        compGuess = compChoices[Math.floor(Math.random() * compChoices.length)];
        console.log("comp " + compGuess);
        //lives reset to 9
        lives = 9;
        //guessCount displays 'reset' lives value (9)
        document.getElementById("guessCount").innerHTML = lives;

    }

    //statement for if user guesses incorrecly
    else {

        //lives decrements by 1
        lives--;
        //guessCount displays new remaining lives value
        document.getElementById("guessCount").innerHTML = lives;
        console.log("lives " + lives);
        
    }
    
    // statement for when lives reach 0
    if (lives < 1){

        //losses increments by 1
        losses++;
        //lives reset to 9
        lives = 9;
        //guessCount displays 'reset' lives value (9)
        document.getElementById("guessCount").innerHTML = lives;
        //lossCount displayes new losses value
        document.getElementById("lossCount").innerHTML = losses;        
    }
    else {}

}

