/* 
interface:
inputs: DefaultScores, ChooseRPS, 
outputs: PlayerChoice, ComputerChoice, Win/Lose, UpdateScores
input to output:
- Define defaultScores Player/PC
- PlayerPlay, ComputerPlay,
- function with PlayerPlay, ComputerPlay as arguments:
    -- for loop with conditions, 
    -- win/lose output
    -- Increment of defaultScore
- PlayNrOfRounds ( function game(): loop 5 rounds )
- Console.log(outputs) for checks (let declare of logged variables). 
*/

//@ts-check


let PlayerScore = 0;
let ComputerScore = 0;

function PlayerChoice() {
    let playerSelection = window.prompt('choose Rock, Paper or Scissors').toUpperCase();
    return playerSelection
}

function ComputerChoice() {
    let randomNr = Math.floor((Math.random() * 3) + 1); //math.random gives nr. between 0 & 1 / Math.floor makes a full integer
    switch(randomNr) {
        case 1:
            return 'ROCK';
        case 2:
            return 'PAPER';
        case 3: 
            return 'SCISSORS';
    }
}

function GameRound(PlayerChoice, ComputerChoice) {
    if (
        (PlayerChoice === 'ROCK' && ComputerChoice === 'SCISSORS') ||
        (PlayerChoice === 'PAPER' && ComputerChoice === 'ROCK') ||
        (PlayerChoice === 'SCISSORS' && ComputerChoice === 'PAPER')
        ) {
            PlayerScore++;
            return 'Player Wins!'
    } else if (
        (PlayerChoice === 'ROCK' && ComputerChoice === 'ROCK') ||
        (PlayerChoice === 'PAPER' && ComputerChoice === 'PAPER') ||
        (PlayerChoice === 'SCISSORS' && ComputerChoice === 'SCISSORS')
    ) {
    return 'Its a tie.'
    } else {
        ComputerScore++;
        return 'Computer Wins..'
    } 
    }

   // Hier cal je de functies pas. De variablen zijn enkel gedefineerd om ze te loggen in de console.
for (let i = 0; i < 5; i++) {
var Player = PlayerChoice();
var Computer = ComputerChoice();
var Round = GameRound(Player, Computer);
console.log(Player);
console.log(Computer);
console.log(Round);
console.log('PlayerScore ' +  PlayerScore);
console.log('ComputerScore ' + ComputerScore);
}
