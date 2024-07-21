function getComputerChoice() {
    let random = Math.floor(Math.random() * 3);
    if (random == 0) {
        return 'rock';
    } else if (random == 1) {
        return 'paper';
    } else {
        return 'scissors';
    }
}

function getHumanChoice() {
    let choice = prompt('Enter rock, paper, or scissors: ');
    return choice;
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        humanChoice = humanChoice.toLowerCase();
        
        if (humanChoice == computerChoice) {
            console.log('It\'s a tie!');
        } else if (humanChoice == 'rock' && computerChoice == 'scissors') {
            humanScore++;
            console.log('You win! Rock beats scissors.');
        } else if (humanChoice == 'paper' && computerChoice == 'rock') {
            humanScore++;
            console.log('You win! Paper beats rock.');
        } else if (humanChoice == 'scissors' && computerChoice == 'paper') {
            humanScore++;
            console.log('You win! Scissors beats paper.');
        } else {
            computerScore++;
            console.log('You lose! ' + computerChoice + ' beats ' + humanChoice + '.');
        }
    }
    for (let i = 0; i < 5; ++i) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }
    if (humanScore == computerScore) {
        console.log('It\'s a tie!' + ' Your score is ' + humanScore + '. Computer score is ' + computerScore + '.');
    } else if (humanScore > computerScore) {
        console.log('You win!' + ' Your score is ' + humanScore + '. Computer score is ' + computerScore + '.');
    } else {
        console.log('You lose!' + ' Your score is ' + humanScore + '. Computer score is ' + computerScore + '.');
    }
}

playGame();