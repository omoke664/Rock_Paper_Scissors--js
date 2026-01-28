
function getComputerChoice(){
    const choice = Math.random();
    if (choice <= 1/3){
        return "Rock";
    }
    if (choice <= 2/3){
        return "Paper";
    }
    else{
        return "Scissors";
    }
}


function getHumanChoice(){
    const human_choice = prompt("Let's play Rock Paper Scissors: what is your choice: ");
    return human_choice || "";
}








function playGame(){
    let humanScore = 0;
    let computerScore = 0;
    function playRound(humanChoice, computerChoice){
        humanChoice = humanChoice.toLowerCase()
        computerChoice = computerChoice.toLowerCase()
        if (humanChoice === computerChoice){
            console.log(`You drew! You chose ${humanChoice} and the computer chose ${computerChoice}.`)
        }
        else if (humanChoice === "rock"){
            if (computerChoice === "paper"){
                console.log("You lose! Paper beats Rock.");
                computerScore += 1;
            }
            else {
                console.log("You Won! Rock beats Scissors");
                humanScore += 1;
            }
        }
        else if (humanChoice === "paper"){
            if (computerChoice === "scissors"){
                console.log("You Lost! Scissors beats Paper");
                computerScore += 1;
            }
            else{
                console.log("You Won! paper beats rock");
                humanScore += 1;
            }
        }
        else{
            if (computerChoice === "paper"){
                console.log("You Won! Scissors beats Paper.")
                humanScore += 1;
            }
            else{
                console.log("You Lost! Rock beats Scissors.")
                computerScore += 1;
            }
        }


    }
    for (let i  = 1; i <= 5; i++){
        console.log(`---Round ${i}---`);
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }
    console.log(`---FINAL SCORE ---`);
    console.log(`The Games Ends: COMPUTER: ${computerScore} | YOU: ${humanScore} `)


}

playGame();