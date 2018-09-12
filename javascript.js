const scoreboard = document.querySelectorAll('#scoreboard>div');
const playerScore = document.querySelector('#playerScore');
const computerScore = document.querySelector('#computerScore');
const tieScore = document.querySelector('#tieScore');
const buttons = document.querySelectorAll('#playerChoices>button');
const startBtn = document.querySelector('#startBtn');

var gameStarted = false;

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        if (gameStarted == true) {
            playRound(button.value);
        }
    });
});

startBtn.addEventListener('click', () => {
    if (gameStarted == false) {
        gameStarted = true;
        startBtn.disabled = true;
        startBtn.textContent = "Good luck!";
    }
});

function computerPlay() {
    let pick = Math.floor(Math.random() * 3)
    switch(pick) {
        case 0: return "rock";
        case 1: return "paper";
        case 2: return "scissors";
    }
}

function playRound(playerSelection) {
    let p = playerSelection;
    let c = computerPlay();
    let winner;
    if ((p == "rock" && c == "paper") ||
        (p == "paper" && c == "scissors") ||
        (p == "scissors" && c == "rock")) {
        console.log("Computer wins!");
        winner = computerScore;
    } else if (p == c) {
        console.log("It's a tie!");
        winner = tieScore;
    } else {
        console.log("Player wins!");
        winner = playerScore;
    }
    updateScore(winner);
}

function updateScore(winner) {
    var scoreTxt = winner.textContent;
    var scoreNum = parseInt(scoreTxt, 10);
    scoreNum += 1;
    winner.textContent = scoreNum;
}

