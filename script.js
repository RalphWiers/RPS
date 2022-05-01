// @ts-check

//FrontScreen met start (extrapage?)
//EndScreen met win/lose+restart (conditionloop?/resetScore)
//Animatie op afbeeldingen
//fades etc.

let playerScore = 0;
let computerScore = 0;
let maxRounds = 5;
let playerPick;

    const buttons = document.querySelectorAll('div.buttons button');
    buttons.forEach(button => button.addEventListener('click', playRound));
    
    document.querySelector('.buttonR').onclick = function() {
    playerPick = "ROCK"; 
    playerImage.src = './images/Rock1.png';}
    document.querySelector('.buttonP').onclick = function() {
    playerPick = "PAPER";
    playerImage.src = './images/Paper1.png' }
    document.querySelector('.buttonS').onclick = function() {
    playerPick = "SCISSORS";
    playerImage.src = './images/Scissors1.png' }

    let winlosetext = document.createElement('p');
    winlosetext.textContent = 'Who will win?';
    document.querySelector('.winloseText').appendChild(winlosetext);
    
    let PlayerScore = document.createElement('p');
    PlayerScore.textContent = `PlayerScore: ${playerScore}`;
    document.querySelector('.scorePlayer').appendChild(PlayerScore);
    
    let ComputerScore = document.createElement('p');
    ComputerScore.textContent = `ComputerScore: ${computerScore}`;
    document.querySelector('.scoreComputer').appendChild(ComputerScore);

    let playerImage = document.createElement('img');
    playerImage.src = './images/Hero.jpg';
    document.querySelector('.playerImage').appendChild(playerImage);

    let computerImage = document.createElement('img');
    computerImage.src = './images/Computer.jpg';
    document.querySelector('.computerImage').appendChild(computerImage);

document.getElementById('welcome2').onclick = function() {
    document.getElementById('StartgameWindow').style.display = 'none';
}

document.getElementById('restart').onclick = function() {
    location.reload();
}

function playRound() {
    let computerChoose = Math.floor(Math.random()*3);
    console.log(`player chooses ${playerPick}`);
    let computerPick;
    switch(computerChoose) {
        case 0: 
            computerPick = 'ROCK';
            computerImage.src = './images/Rock1.png';
         break;
        case 1:
            computerPick = 'PAPER';
            computerImage.src = './images/Paper1.png';
         break;
        case 2:
            computerPick = 'SCISSORS';
            computerImage.src = './images/Scissors1.png';
         break;
    }
    console.log(`computer chooses ${computerPick}`);

    if 
        ((playerPick === 'ROCK' && computerPick === 'SCISSORS') ||
        (playerPick === 'PAPER' && computerPick === 'ROCK') ||
        (playerPick === 'SCISSORS' && computerPick === 'PAPER')) {
            console.log('player wins round');
            playerScore++;
            PlayerScore.textContent = `PlayerScore: ${playerScore}`;
            winlosetext.textContent = 'Player Wins!';
        } 
    else if 
        ((playerPick === 'PAPER' && computerPick === 'SCISSORS') ||
        (playerPick === 'SCISSORS' && computerPick === 'ROCK') ||
        (playerPick === 'ROCK' && computerPick === 'PAPER')) {
            console.log('computer wins round');
            computerScore++;
            ComputerScore.textContent = `ComputerScore: ${computerScore}`;
            winlosetext.textContent = 'Computer Wins!';
        }
    else {
        console.log('Its a tie')
        winlosetext.textContent = 'Its a tie!';
    };
    console.log(`playerScore is ${playerScore}`);
    console.log(`computerScore is ${computerScore}`);

    if(playerScore == 2 || computerScore == 2){ 
        document.getElementById('EndgameWindow').style.display = 'block';
        document.getElementById('playerScore').textContent = `PlayerScore: ${playerScore}`;
        document.getElementById('computerScore').textContent = `ComputerScore: ${computerScore}`;
    };
}

if (playerScore > computerScore) { 
    console.log('Player wins game')} else if
    (playerScore < computerScore) {
    console.log('Computer wins game')};
