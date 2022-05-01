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

let rockBtn = document.querySelector('.buttonR');
let paperBtn = document.querySelector('.buttonP');
let scissorsBtn = document.querySelector('.button');
let PlayerScore = 0;
let ComputerScore = 0;

/*function PlayerChoice() {
    let playerSelection = window.prompt('choose Rock, Paper or Scissors').toUpperCase();
    return playerSelection;
}*/

let PlayerChoice = '';

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
    console.log(ComputerChoice());
    console.log(PlayerChoice);
    if (
        (PlayerChoice == 'ROCK' && ComputerChoice == 'SCISSORS') ||
        (PlayerChoice == 'PAPER' && ComputerChoice ==='ROCK') ||
        (PlayerChoice == 'SCISSORS' && ComputerChoice == 'PAPER')) {
            PlayerScore++;
            return 'Player Wins!';
    } else if (PlayerChoice == ComputerChoice) {
            return 'Its a tie.';
    } else {
            ComputerScore++;
            return 'Computer Wins..';
    }};
    

        document.querySelector('.buttonR').onclick = function() {
        PlayerChoice = "ROCK";
        console.log(`PlayerChoice is ${PlayerChoice}`);
        let game = GameRound(PlayerChoice, ComputerChoice);
        console.log(game);

        }
        document.querySelector('.buttonP').onclick = function() {
        PlayerChoice = "PAPER";
        console.log(`PlayerChoice is ${PlayerChoice}`);
        }
        document.querySelector('.buttonS').onclick = function() {
        PlayerChoice = "SCISSORS";
        console.log(`PlayerChoice is ${PlayerChoice}`);
        }


/*
for (let i = 0; i < 5; i++) {
var Player = PlayerChoice;
var Computer = ComputerChoice();
var Round = GameRound(Player, Computer);
console.log(Player);
console.log(Computer);
console.log(Round);
console.log('PlayerScore ' +  PlayerScore);
console.log('ComputerScore ' + ComputerScore);
} */
