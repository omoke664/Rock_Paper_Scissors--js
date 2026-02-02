
let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){
    const choices = ["Rock", "Paper", "Scissors"];
    return choices[Math.floor(Math.random() * choices.length)];
}





//creating header for our game
const header = document.createElement("h1");
header.textContent = "Welcome to my Rock Paper Scissors Game.";
header.style.cssText = "text-align:center; color:green;";
document.body.appendChild(header);

const main = document.createElement("div");
main.id = "main";
main.style.cssText = "padding:10px; background-color:yellow; border:2px solid black; border-radius:5px;"
document.body.appendChild(main);

//creating results container
const resultsDiv = document.createElement("div");
resultsDiv.id = "results";
resultsDiv.textContent = "Select your move to start the game!";
resultsDiv.style.cssText = "text-align:center; background-color:white;; padding:20px; font-weight:800px; font-size: 36px; border:2px solid black;"
main.appendChild(resultsDiv);

    
function playRound(humanChoice, computerChoice){
    //Check is score of 5 is already reached
    if (humanScore === 5 || computerScore === 5) return;

    humanChoice = humanChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();

    let roundResult = "";

    if (humanChoice === computerChoice){
        roundResult = `Draw! Both chose ${humanChoice}.`;
    }
    else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ){
        humanScore++;
        roundResult = `Win! ${humanChoice} beats ${computerChoice}.`;
    }
    else{
        computerScore++;
        roundResult = `Loss! ${computerChoice} beats ${humanChoice}`;
    }
    //Updating DOM
    resultsDiv.textContent = `${roundResult} | Score ->Player: ${humanScore} - Computer: ${computerScore}`;

    //Checking for winner
    if (humanScore === 5){
        resultsDiv.textContent = `🏆 GAME OVER: YOU WIN! Final Score: ${humanScore}-${computerScore}`;
        resultsDiv.style.color = 'blue';
        disableButtons();
    } else if (computerScore === 5){
        resultsDiv.textContent = `💻 GAME OVER: COMPUTER WINS! Final Score: ${computerScore}-${humanScore}`;
        resultsDiv.style.color = "red";
        disableButtons();
    }

    
      

}

function disableButtons(){
    buttons.forEach(btn => {
        btn.disabled = true;
        btn.style.opacity = "0.5";
        btn.style.cursor = "not-allowed";
    })
}

//creating div for buttons
const btns = document.createElement("div");
main.appendChild(btns);
btns.style.cssText="display:flex; padding:5px; align-items:center; gap:5px; justify-content:space-around; margin:10px;"

//creating buttons (DOM JS)
const rockBtn = document.createElement("button");
const paperBtn = document.createElement("button");
const scissorsBtn = document.createElement("button");

const buttons = [rockBtn, paperBtn, scissorsBtn]
buttons.forEach(btn => {
    btn.style.cssText = "background-color:green; color:white; border:2px solid green; border-radius:5px; padding 15px;font-size:30px;"
});





//Setting content and Ids
rockBtn.id = "rock-btn";
rockBtn.textContent = "Rock";
btns.appendChild(rockBtn);

paperBtn.id = "paper-btn";
paperBtn.textContent = "Paper";
btns.appendChild(paperBtn);

scissorsBtn.id = "scissors-btn";
scissorsBtn.textContent = "Scissors";
btns.appendChild(scissorsBtn);


//Adding event listeners
rockBtn.addEventListener("click", () => playRound("rock", getComputerChoice()));
paperBtn.addEventListener("click", () => playRound("paper", getComputerChoice()));
scissorsBtn.addEventListener("click", () => playRound("scissors", getComputerChoice()));





