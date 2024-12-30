const buttons = document.querySelectorAll('.button');
const display = document.querySelector("#display");
const reset = document.querySelector('#reset')

let humanSelection;
let computerSelection;
let outcome;
let humanScore = 0;
let computerScore = 0;

document.addEventListener('click', function(event){
  if (humanScore < 5 && computerScore < 5){
    if (event.target.classList.contains('button')){
      humanSelection = event.target.id;
      computerSelection = getComputerChoice();
  
      if (humanSelection === computerSelection) {
        const tiePara = document.createElement("p");
        tiePara.textContent = `Tie! - Human: ${humanScore} PC: ${computerScore}`;
        display.appendChild(tiePara); // Tie
      } else if (
        (humanSelection === "rock" && computerSelection === "scissors") ||
        (humanSelection === "scissors" && computerSelection === "paper") ||
        (humanSelection === "paper" && computerSelection === "rock")
      ) {
        humanScore++;
        const humanWin = document.createElement("p");
        humanWin.textContent = `Human Wins! Human: ${humanScore} PC: ${computerScore}`;
        display.appendChild(humanWin); 
      } else {
        computerScore++;
        const computerWin = document.createElement("p");
        computerWin.textContent = `Computer Wins! Human: ${humanScore} PC: ${computerScore}`;
        display.appendChild(computerWin); 
      }
    }
  }
  if (humanScore === 5 || computerScore === 5) {
    const seperator = document.createElement("p");
    seperator.textContent = "------------------------------------";
    const finalScore = document.createElement("p");
    finalScore.textContent = `Game Over! Final Score - Human: ${humanScore} PC: ${computerScore}`;
    display.appendChild(seperator);
    display.appendChild(finalScore); // Append to the DOM
  }
});

reset.addEventListener('click', function(){
   // Reset the scores
   humanScore = 0;
   computerScore = 0;
 
   // Clear all child elements of the display container
   while (display.firstChild) {
     display.removeChild(display.firstChild);
   }
 
   // Add a message indicating the game has been reset
   const resetMessage = document.createElement("p");
   resetMessage.textContent = "Game has been reset. Start a new round!";
   display.appendChild(resetMessage);
});



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


