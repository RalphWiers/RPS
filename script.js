// @ts-check

//declare variables (playerScore+computerScore)
//function playround

let playerScore = 0;
let computerScore = 0;
let maxRounds = 5;

function playRound() {
    let Pick = prompt("Please pick", "Rock, Paper, Scissors");
    let playerPick = Pick.toUpperCase();
    console.log(playerPick);
    let computerChoose = Math.floor(Math.random()*3);
    console.log(`player chooses ${playerPick}`);
    let computerPick;
    switch(computerChoose) {
        case 0: 
            computerPick = 'ROCK';
         break;
        case 1:
            computerPick = 'PAPER';
         break;
        case 2:
            computerPick = 'SCISSORS';
         break;
    }
    console.log(`computer chooses ${computerPick}`);

    if 
        ((playerPick === 'ROCK' && computerPick === 'SCISSORS') ||
        (playerPick === 'PAPER' && computerPick === 'ROCK') ||
        (playerPick === 'SCISSORS' && computerPick === 'PAPER')) {
            console.log('player wins round');
            playerScore++;
        } 
    else if 
        ((playerPick === 'PAPER' && computerPick === 'SCISSORS') ||
        (playerPick === 'SCISSORS' && computerPick === 'ROCK') ||
        (playerPick === 'ROCK' && computerPick === 'PAPER')) {
            console.log('computer wins round');
            computerScore++;
        }
    else {
        console.log('Its a tie')
    };
    console.log(`playerScore is ${playerScore}`);
    console.log(`computerScore is ${computerScore}`);
}

function game() {
for(let i = 0; i < maxRounds; i++) {
playRound();
}};

game();

if (playerScore > computerScore) { 
    console.log('Player wins game')} else if
    (playerScore < computerScore) {
    console.log('Computer wins game')};


