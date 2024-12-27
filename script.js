
// Write the logic to get the computer choice for Rock, Paper, Scissors. Make function that will generate a random integer between 1 and 3, those numbers are assigned to the values Rock Paper or Scissors. Create a variable and assign that value for the computerChoice.

let randomNum = Math.floor(Math.random()*3);
function getComputerChoice() {
	if (randomNum === 0){
		return "rock";
	}
	else if (randomNum === 1){
		return "paper"
	}
	else {
		return "scissors"
	}
}

let computerChoice = getComputerChoice();
console.log(computerChoice);

/* Write logic to get the humans choice. Make  function for this algorithm. Create a prompt for user input text, limit it so that can only select Rock Paper or Scissors. Present an error message until the correct choice is picked. Only accept those 3. Store that value into a variable for humanChoice */

/* Declare global variables for storing the scores of Human and Computer, set initial value */
let userChoice;
let humanScore = 0;
let computerScore = 0;
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();
playRound(humanSelection, computerSelection);

function getHumanChoice() {
	let keepGoing = true;
	while(keepGoing){
		userChoice = prompt("Choose: Rock, Paper, or Scissors?","");
		let processedName = userChoice.toLowerCase();
		console.log(processedName);

		if (processedName === "rock" || processedName === "paper" || processedName === "scissors"){
			keepGoing = false;
			return processedName;
		}
		else{
			alert("Invalid input, try again!")
		}
	}
	}

/* Write logic to play a single round, create function that takes human and computer choices as arguments. Plays a round and increments the winner's score and logs a winner. Modify the user input for human choice to take case insensitive values. Create hiearachy of all scenarios to determine winner of points and ties.  */

function playRound (humanChoice, computerChoice){
	if (humanChoice === computerChoice){
		console.log("Tie Game!")
	}
	else if ((humanChoice === "rock" && computerChoice === "scissors")|| humanChoice === "scissors" && computerChoice === "paper"){
		humanScore++;
		console.log("Human Wins!");
	}
	else {
		computerScore++;
		console.log("Computer Wins!");
	}
	}

