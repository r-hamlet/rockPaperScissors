function computerPlay(){
    var choice = Math.floor(Math.random() * 3);
    switch (choice) {
        case 0 : return "rock";
        break;
        case 1 : return "paper";
        break;
        case 2 : return "scissors";
    }
}

function playRound(computerSelection){
    playerSelection = prompt("Rock, Paper, or Scissors?").toLowerCase();
    switch (playerSelection) {
        case 'rock' : switch (computerSelection) {
            case 'rock' : return 'tie'
            break;
            case 'paper' : return 'lose'
            break;
            case 'scissors' : return 'win'
        }
        break;
        case 'paper' : switch (computerSelection) {
            case 'rock' : return 'win'
            break;
            case 'paper' : return 'tie'
            break;
            case 'scissors' : return 'lose'
        }
        break;
        case 'scissors' : switch (computerSelection) {
            case 'rock' : return 'lose'
            break;
            case 'paper' : return 'win'
            break;
            case 'scissors' : return 'tie'
        }
    }
}

function game(rounds){
    playerScore = 0;
    computerScore = 0;
    for (i = 0; i < rounds; i++) {
        switch (playRound(computerPlay())) {
            case 'win' : playerScore++;
            break;
            case 'lose' : computerScore++;
            break;
            case 'tie' : console.log("tie");
        }
    }
    if (playerScore > computerScore) {
        console.log("Congrats! You win " + playerScore + " to " + computerScore);
    }
    else if (computerScore > playerScore) {
        console.log("Oh no! You've lost " + computerScore + " to " + playerScore);
    }
    else console.log("It's a tie!")
}