var userWin = 0
var compWin = 0
var tied = 0

// ask to play again
function playAgain() {
    return confirm("Do you want to play again?");
}

//prompt user for decision
function RockPaperScissor() {
    var userDecision = prompt("Choose R, P, or S")

    return userDecision;
}

function Stats() {
    // var userWin
    // var compWin
    alert("You Win: " + userWin + "\nYou Lose: " + compWin + "\nTied: " + tied);
}

// function UserDecided(); {

// }

function ComputerDecided() {

    var choice = ["R", "P", "S"];
    var i = Math.floor(Math.random() * 10) % 3; // random # generator
    // math random gives a decimal ; now we're going to get something like 1.7 -
    //but we need the whole number; math.floor rounds everything down to get whole number; modulus '3' divides everything by 3 and works with remainders
    //Math.random() generates a decimal between 0-1. We want to multiply this number by the length of the array then using Math.floor we want to round it off so it always grabs one (whole #) from the full array 

    // console.log(i); 
    alert("Computer Played " + choice[i]);
    return choice[i]
}


function winner(user, comp) {
    if (user === comp) {
        alert("Tie");
        tied++;
        //tied++, userWin++, and compWin++ increases win or lose count
    } else if (user === "R" && comp === "S") {
        alert("You win!");
        userWin++;
    } else if (user === "P" && comp === "R") {
        alert("You win!");
        userWin++;
    } else if (user === "S" && comp === "P") {
        alert("You win!");
        userWin++;
    } else {
        alert("You lose");
        compWin++;
    }
}

function runProgram() {
    var cont = true;
    for (; cont; ) {
var user = RockPaperScissor();
var comp = ComputerDecided();
winner(user, comp);

Stats();
cont = playAgain();
    }
}

runProgram();

// console.log(ComputerDecided());
// winner("S", "R");