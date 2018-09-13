const playerScore = document.querySelector('#playerScore');
const computerScore = document.querySelector('#computerScore');
const tieScore = document.querySelector('#tieScore');
const buttons = document.querySelectorAll('#playerChoices>button');
const startBtn = document.querySelector('#startBtn');
const announcer = document.querySelector('#announcer');
const maxRoundsInput = document.querySelector('#maxRounds');

var gameStarted = false;
var round = 0;
var maxRounds = 0;
var playerScoreNum = 0;
var computerScoreNum = 0;
var tieScoreNum = 0;

startBtn.addEventListener('click', startGame);

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        if (gameStarted == true) {
            playRound(button.value);
        }
    });
});

function startGame() {
    if ((gameStarted == false) && (maxRoundsInput.validity.badInput == false)) {
        gameStarted = true;
        startBtn.disabled = true;
        startBtn.textContent = "Good luck!";
        maxRoundsInput.disabled = true;
        maxRounds = maxRoundsInput.valueAsNumber;
    }
}

function computerPlay() {
    let pick = Math.floor(Math.random() * 3)
    switch(pick) {
        case 0: return "rock";
        case 1: return "paper";
        case 2: return "scissors";
    }
}

function playRound(playerSelection) {
    if (gameStarted == false) { return; }
    else {
        round++;
        let p = playerSelection;
        let c = computerPlay();
        let winner;
        let score;
        if ((p == "rock" && c == "paper") ||
            (p == "paper" && c == "scissors") ||
            (p == "scissors" && c == "rock")) {
            announcer.textContent = `Computer plays ${c}. You lose round ${round}!`;
            computerScoreNum++;
            winner = computerScore;
            score = computerScoreNum;
        } else if (p == c) {
            announcer.textContent = `Computer also plays ${c}. You tie round ${round}!`;
            tieScoreNum++;
            winner = tieScore;
            score = tieScoreNum;
        } else {
            announcer.textContent = `Computer plays ${c}. You win round ${round}!`;
            playerScoreNum++;
            winner = playerScore;
            score = playerScoreNum;
        }
        updateScore(winner, score);
    }
}

function updateScore(winner, score) {
    winner.textContent = score;
    if (round == maxRounds) {
        declareWinner();
    }
}

function declareWinner() {
    if (playerScoreNum > computerScoreNum) {
        alert('You win the game!');
    } else if (computerScoreNum > playerScoreNum) {
        alert('You lose the game!');
    } else {
        alert('The game is a tie!');
    }
    restartGame();
}

function restartGame() {
    gameStarted = false;
    startBtn.disabled = false;
    startBtn.textContent = 'Start Game';
    playerScore.textContent = 0;
    computerScore.textContent = 0;
    tieScore.textContent = 0;
    playerScoreNum = 0;
    computerScoreNum = 0;
    tieScoreNum = 0;
    round = 0;
    maxRounds = 0;
    maxRoundsInput.disabled = false;
    announcer.textContent = '';
}
