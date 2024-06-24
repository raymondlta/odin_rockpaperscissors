let HUMAN_SCORE = 0;
let COMPUTER_SCORE = 0;

function getComputerChoice() {
    const choice = Math.floor(Math.random() * 100) + 1;
    if (choice < 33) {
        return 'rock';
    }
    else if (choice >= 33 && choice < 66) {
        return 'paper';
    }
    else {
        return 'scissors';
    }
}

function gameLogic(human, computer) {
    if (human === 'rock' || human === 'r') {
        if (computer === 'rock') {
            return "Tie! You both chose Rock";
        }
        else if (computer === 'paper') {
            COMPUTER_SCORE++;
            return "You lose! Paper beats Rock";
        }
        else {
            HUMAN_SCORE++;
            return "You win! Scissors loses to Rock";
        }
    }
    else if (human === 'paper' || human === 'p') {
        if (computer === 'rock') {
            HUMAN_SCORE++;
            return "You win! Rock loses to Paper";
        }
        else if (computer === 'paper') {
            return "Tie! You both chose Paper";
        }
        else {
            COMPUTER_SCORE++;
            return "You lose! Scissors beats Paper";
        }
    }
    else {
        if (computer === 'rock') {
            COMPUTER_SCORE++;
            return "You lose! Rock beats Scissors";
        }
        else if (computer === 'paper') {
            HUMAN_SCORE++;
            return "You win! Paper loses to Scissors";
        }
        else {
            return "Tie! You both chose Scissors";
        }
    }
}

function playRound(humanChoice) {
    const computerChoice = getComputerChoice();
    return gameLogic(humanChoice, computerChoice);
}

const result = document.querySelector(".result");
const playerScore = document.querySelector(".playerScore");
const cpuScore = document.querySelector(".cpuScore");
const selection = document.querySelector(".selection");
const gameOver = document.createElement("div");

function updateScoreboard(resultVal) {
    result.textContent = resultVal;
    playerScore.textContent = "You: " + HUMAN_SCORE;
    cpuScore.textContent = "CPU: " + COMPUTER_SCORE;

    if (HUMAN_SCORE >= 5) {
        gameOver.textContent = "Game Over - You Win!!!";
        result.appendChild(gameOver);
        //document.body.removeChild(selection);
    }
    else if (COMPUTER_SCORE >= 5) {
        gameOver.textContent = "Game Over - You Lose...";
        result.appendChild(gameOver);
        //document.body.removeChild(selection);
    }
}

updateScoreboard("Start playing by clicking the buttons below");

selection.addEventListener("click", function (e) {
    let resultVal = "";

    if (HUMAN_SCORE >= 5 || COMPUTER_SCORE >= 5) {
        HUMAN_SCORE = 0;
        COMPUTER_SCORE = 0;
    }

    switch (e.target.className) {
        case "rockBtn":
            resultVal = playRound("rock");
            updateScoreboard(resultVal);
            break;
        case "paperBtn":
            resultVal = playRound("paper");
            updateScoreboard(resultVal);
            break;
        case "scissorBtn":
            resultVal = playRound("scissor");
            updateScoreboard(resultVal);
            break;
        default:
            break;
    }
});

