
// Write the logic to get the computer choice for Rock, Paper, Scissors. Make function that will generate a random integer between 1 and 3, those numbers are assigned to the values Rock Paper or Scissors. Create a variable and assign that value for the computerChoice.

let randomNum = Math.floor(Math.random()*3);
function getComputerChoice() {
	if (randomNum === 0){
		return "Rock";
	}
	else if (randomNum === 1){
		return "Paper"
	}
	else {
		return "Scissors"
	}
}

let computerChoice = getComputerChoice();
console.log(computerChoice);

/* Write logic to get the humans choice. Make  function for this algorithm. Create a prompt for user input text, limit it so that can only select Rock Paper or Scissors. Present an error message until the correct choice is picked. Only accept those 3. Store that value into a variable for humanChoice */

let userChoice;

function getHumanChoice() {
	let keepGoing = true;
	while(keepGoing){
		userChoice = prompt("Choose: Rock, Paper, or Scissors?","");

		if (userChoice === "Rock" || userChoice === "Paper" || userChoice === "Scissors"){
			keepGoing = "false";
			return userChoice;
		}
		else{
			alert("Invalid input, try again!")
		}
	}
	}
let humanChoice = getHumanChoice();
console.log(humanChoice);