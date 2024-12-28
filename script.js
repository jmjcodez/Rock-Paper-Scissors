
// Write the logic to get the computer choice for Rock, Paper, Scissors. Make function that will generate a random integer between 1 and 3, those numbers are assigned to the values Rock Paper or Scissors. Create a variable and assign that value for the computerChoice.


function getComputerChoice() {
	let randomNum = Math.floor(Math.random()*3);
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

/* Write logic to get the humans choice. Make  function for this algorithm. Create a prompt for user input text, limit it so that can only select Rock Paper or Scissors. Present an error message until the correct choice is picked. Only accept those 3. Store that value into a variable for humanChoice */

/* Declare global variables for storing the scores of Human and Computer, set initial value */

function getHumanChoice() {
	let keepGoing = true;
	while(keepGoing){
		let userChoice = prompt("Choose: Rock, Paper, or Scissors?","");
		let processedName = userChoice.toLowerCase();

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



/* Add function to play a game. Nest the necessary functions within a loop to keep playing the game until a score of 5 is reached by either player. When 5 is reached end the loop and return message of final score and winner */


function playGame (){
	

	
	function playRound(humanSelection, computerSelection){
		if (humanSelection === computerSelection){
			return 0;
		}
		else if ((humanSelection === "rock" && computerSelection === "scissors")|| (humanSelection === "scissors" && computerSelection === "paper")){
			return 1;
		}
		else {
			return 2;
		}
		}

	let humanScore = 0;
	let computerScore = 0;
	let rounds = 0;
	while (rounds < 5){
		console.log(`-----Round ${rounds+1}-----`)
		let computerSelection = getComputerChoice();
		let humanSelection = getHumanChoice();

		let roundResult = playRound(humanSelection, computerSelection);
	
		if (roundResult === 1){
			humanScore++;
			console.log("Human wins round!");

		} 
		else if (roundResult === 2){
			computerScore++;
			console.log("Computer wins round!");
		}
		else {
			console.log ("Tie round!");
		}
		console.log ("Computer Chose " + computerSelection + ", Human Chose " + humanSelection);
		console.log ("Computer: " + computerScore + " Human: " + humanScore);
		rounds++;
		getComputerChoice();
}

console.log("-----GAME OVER!-----")

if (humanScore > computerScore){
	return `Human Wins! Final Score - Computer: ${computerScore} Human: ${humanScore}`;
}
else if (humanScore === computerScore){
	return `Tie Game! Final Score - Computer: ${computerScore} Human: ${humanScore}`;
}
else {
	return `Computer Wins! Final Score - Computer: ${computerScore} Human: ${humanScore}`;
}

}

let outcome = playGame();
console.log(outcome);


