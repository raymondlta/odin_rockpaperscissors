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

function getHumanChoice() {
    const choice = prompt("Please enter either rock(r), paper(p), or scissors(s): ").toLowerCase();
    if (choice === 'rock' || choice === 'r' || choice === 'paper' || choice === 'p' || 
        choice === 'scissors' || choice === 's') {
        return choice;
    }
    else {
        console.log(`${choice} is not a valid input, try again`);
    }
}

function gameLogic(human, computer) {
    if (human === 'rock' || human === 'r') {
        if (computer === 'rock') {
            console.log("Tie! You both chose Rock");
        }
        else if (computer === 'paper') {
            console.log("You lose! Paper beats Rock");
            COMPUTER_SCORE++;
        }
        else {
            console.log("You win! Scissors loses to Rock");
            HUMAN_SCORE++;
        }
    }
    else if (human === 'paper' || human === 'p') {
        if (computer === 'rock') {
            console.log("You win! Rock loses to Paper");
            HUMAN_SCORE++;
        }
        else if (computer === 'paper') {
            console.log("Tie! You both chose Paper");
        }
        else {
            console.log("You lose! Scissors beats Paper");
            COMPUTER_SCORE++;
        }
    }
    else {
        if (computer === 'rock') {
            console.log("You lose! Rock beats Scissors");
            COMPUTER_SCORE++;
        }
        else if (computer === 'paper') {
            console.log("You win! Paper loses to Scissors");
            HUMAN_SCORE++;
        }
        else {
            console.log("Tie! You both chose Scissors");
        }
    }
}

function playRound() {
    let humanChoice = getHumanChoice();

    while (!humanChoice) {
        humanChoice = getHumanChoice()
    }

    const computerChoice = getComputerChoice();
    gameLogic(humanChoice, computerChoice);
    console.log(`SCOREBOARD -> YOU - ${HUMAN_SCORE} CPU - ${COMPUTER_SCORE}`);
}

function playGame() {
    for (let i = 0; i < 5; i++) {
        playRound();
    }
    if (HUMAN_SCORE > COMPUTER_SCORE) {
        console.log("You are the Winner! Congratulations");
    }
    else if (HUMAN_SCORE < COMPUTER_SCORE) {
        console.log("The Computer has bested you this time, better luck next time");
    }
    else {
        console.log("Game has ended in a tie");
    }
    HUMAN_SCORE = 0;
    COMPUTER_SCORE = 0;
}