let userChoice;

// Click button: rock, paper, scissors
const userPlay = function () {
    const rockButton = document.querySelector('#rock');
    const paperButton = document.querySelector('#paper');
    const scissorsButton = document.querySelector('#scissors');

    rockButton.addEventListener('click', (e) => {
        userChoice = "rock";
        playRound(userChoice, computerPlay());
        return;
    });

    paperButton.addEventListener('click', (e) => {
        userChoice = "paper";
        playRound(userChoice, computerPlay());
        return;
    });

    scissorsButton.addEventListener('click', (e) => {
        userChoice = "scissors";
        playRound(userChoice, computerPlay());
        return;
    });
}
userPlay(); // Click on a button

// PC randomly picks rock, paper, or scissors
function computerPlay() {
    const n = Math.floor(Math.random() * 3) + 1;
    if (n === 3) {
        return "rock";;
    } else if (n === 2) {
        return "paper";
    } else {
        return "scissors";
    }    
}

function playRound(playerSelection, computerSelection) {
    const resultText = document.querySelector('#results');
    // Potential outcomes if user selects ROCK
    if (playerSelection === "rock") {
        if (computerSelection === "paper") {
            resultText.textContent = "You lose, paper beats rock!";
        } else if (computerSelection === "rock") {
            resultText.textContent = "Tie!";
        } else {
            resultText.textContent = "You win, rock beats scissors!";
        }
    }

    // Potential outcomes if user selects PAPER
    if (playerSelection === "paper") {
        if (computerSelection === "scissors") {
            resultText.textContent = "You lose, scissors beats paper!";
        } else if (computerSelection === "paper") {
            resultText.textContent = "Tie!";
        } else {
            resultText.textContent = "You win, paper beats rock!";
        }
    }

    // Potential outcomes if user selects SCISSORS
    if (playerSelection === "scissors") {
        if (computerSelection === "rock") {
            resultText.textContent = "You lose, rock beats scissors!"
        } else if (computerSelection === "scissors") {
            resultText.textContent = "Tie!";
        } else {
            resultText.textContent = "You win, scissors beats paper!";
        }
    }
}