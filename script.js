// Function to get the computer's choice for Rock, Paper, Scissors
function getComputerChoice() {
  let randomNum = Math.floor(Math.random() * 3);
  if (randomNum === 0) {
    return "rock";
  } else if (randomNum === 1) {
    return "paper";
  } else {
    return "scissors";
  }
}

// Function to get the human's choice with input validation
function getHumanChoice() {
  while (true) {
    let userChoice = prompt("Choose: Rock, Paper, or Scissors?", "").toLowerCase();
    if (userChoice === "rock" || userChoice === "paper" || userChoice === "scissors") {
      return userChoice;
    } else {
      alert("Invalid input. Please choose Rock, Paper, or Scissors.");
    }
  }
}

// Function to play a single round of Rock, Paper, Scissors
function playGame() {
  function playRound(humanSelection, computerSelection) {
    if (humanSelection === computerSelection) {
      return 0; // Tie
    } else if (
      (humanSelection === "rock" && computerSelection === "scissors") ||
      (humanSelection === "scissors" && computerSelection === "paper") ||
      (humanSelection === "paper" && computerSelection === "rock")
    ) {
      return 1; // Human wins
    } else {
      return 2; // Computer wins
    }
  }

  let humanScore = 0;
  let computerScore = 0;
  let rounds = 0;

  while (rounds < 5) {
    console.log(`----- Round ${rounds + 1} -----`);

    let computerSelection = getComputerChoice();
    let humanSelection = getHumanChoice();

    let roundResult = playRound(humanSelection, computerSelection);

    if (roundResult === 1) {
      humanScore++;
      console.log("Human wins round!");
    } else if (roundResult === 2) {
      computerScore++;
      console.log("Computer wins round!");
    } else {
      console.log("It's a tie!");
    }

    console.log(`Computer chose: ${computerSelection}, Human chose: ${humanSelection}`);
    console.log(`Scores -> Computer: ${computerScore}, Human: ${humanScore}`);
    rounds++;
  }

  console.log("----- GAME OVER! -----");

  if (humanScore > computerScore) {
    return `Human Wins! Final Score - Computer: ${computerScore}, Human: ${humanScore}`;
  } else if (humanScore === computerScore) {
    return `It's a Tie! Final Score - Computer: ${computerScore}, Human: ${humanScore}`;
  } else {
    return `Computer Wins! Final Score - Computer: ${computerScore}, Human: ${humanScore}`;
  }
}

let outcome = playGame();
console.log(outcome);