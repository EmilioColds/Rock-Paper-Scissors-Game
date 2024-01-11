var wins = 0;

var ties = 0;

var losses = 0;

var gameTools = ["R", "P", "S"];

var playGame = function (){

    var userChoice = window.prompt ("Write R for rock, P for paper and S for scissors.");
    console.log (userChoice)

    if (!userChoice){
        window.alert ("Please enter an option");
    }

    userChoice = userChoice.toUpperCase();

    var index = Math.floor(Math.random() * gameTools.length)
    var computerChoice = gameTools[index];

    if (userChoice == computerChoice) {
        window.alert ("It's a tie, the computer also chose " + userChoice + "!")
    } else if (userChoice == "R" && computerChoice == "S") {
        window.alert ("You win, computer chose S")
    } else if (userChoice == "P" && computerChoice == "R") {
        window.alert ("You win, computer chose R")
    } else if (userChoice == "S" && computerChoice == "P") {
        window.alert ("You win, computer chose P")
    } else if (userChoice == "R" && computerChoice == "P") {
        window.alert ("Unfortunately, you lost :c, the computer chose " + computerChoice + "!")
    } else if (userChoice == "P" && computerChoice == "S") {
        window.alert ("Unfortunately, you lost :c, the computer chose " + computerChoice + "!")
    } else if (userChoice == "S" && computerChoice == "R") {
        window.alert ("Unfortunately, you lost :c, the computer chose " + computerChoice + "!")
    }

    if (userChoice == computerChoice) {
        ties++;
        window.alert("The score is: " + wins + " wins, " + losses + " losses and " + ties + " ties.")
    } else if (userChoice == "R" && computerChoice == "S") {
        wins++;
        window.alert("The score is: " + wins + " wins, " + losses + " losses and " + ties + " ties.")
    } else if (userChoice == "P" && computerChoice == "R") {
        wins++;
        window.alert("The score is: " + wins + " wins, " + losses + " losses and " + ties + " ties.") 
    } else if (userChoice == "S" && computerChoice == "P") {
        wins++;
        window.alert("The score is: " + wins + " wins, " + losses + " losses and " + ties + " ties.")
    } else if (userChoice == "R" && computerChoice == "P") {
        losses++;
        window.alert("The score is: " + wins + " wins, " + losses + " losses and " + ties + " ties.")
    } else if (userChoice == "P" && computerChoice == "S") {
        losses++;
        window.alert("The score is: " + wins + " wins, " + losses + " losses and " + ties + " ties.")
    } else if (userChoice == "S" && computerChoice == "R") {
        losses++;
        window.alert("The score is: " + wins + " wins, " + losses + " losses and " + ties + " ties.")
    }

    var playAgain = window.prompt ("Wanna play again? Just type 'Y' for YES or 'N' for NO");
    console.log (playAgain)

    playAgain = playAgain.toUpperCase();

    if (playAgain == "Y") {
        playGame();
    } else {
        window.alert ("Thanks for playing")
    }

};

playGame();