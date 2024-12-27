
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

