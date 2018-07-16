//STILL NEED TO DO
//CHANGE THE ICONS?
//USE CUSTOM WORDS FOR WINNING/LOSING?


//caching the DOM elements
let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissor_div = document.getElementById("scissor");
const lizard_div = document.getElementById("lizard");
const spock_div = document.getElementById("spock");

function game(userChoice){
   const computerChoice = getComputerChoice();
   //console.log("user choice: " + userChoice);
   //console.log("computer choice: " +  computerChoice);

   switch (userChoice + computerChoice){
      case "RockScissor":
      case "RockLizard":
      case "LizardSpock":
      case "LizardPaper":
      case "SpockScissor":
      case "SpockRock":
      case "ScissorLizard":
      case "ScissorPaper":
      case "PaperSpock":
      case "PaperRock":
         win(userChoice, computerChoice);
         break;
      case "RockPaper":
      case "RockSpock":
      case "PaperScissor":
      case "PaperLizard":
      case "ScissorRock":
      case "ScissorSpock":
      case "LizardRock":
      case "LizardScissor":
      case "SpockLizard":
      case "SpockPaper":
         lose(userChoice, computerChoice);
         break;
      case "RockRock":
      case "PaperPaper":
      case "ScissorScissor":
      case "SpockSpock":
      case "LizardLizard":
         draw(userChoice, computerChoice);
         break;
   }
}

function win(userChoice, computerChoice){
   const smallUserLabel = "user".fontsize(4).sub();
   const smallCompLabel = "comp".fontsize(4).sub();
   console.log("USER WINS");
   userScore++;
   console.log(userScore);
   userScore_span.innerHTML = userScore;
   result_p.innerHTML = userChoice + smallUserLabel + " beats " + computerChoice + smallCompLabel + ". You win!";
}

function lose(userChoice, computerChoice){
   const smallUserLabel = "user".fontsize(4).sub();
   const smallCompLabel = "comp".fontsize(4).sub();
   console.log("COMPUTER WINS")
   computerScore++;
   console.log(computerScore);
   computerScore_span.innerHTML = computerScore;
   result_p.innerHTML = userChoice + smallUserLabel + " loses to " + computerChoice + smallCompLabel +". You lose!";
}

function draw(userChoice, computerChoice){
   const smallUserLabel = "user".fontsize(4).sub();
   const smallCompLabel = "comp".fontsize(4).sub();
   console.log("DRAW!")
   result_p.innerHTML = userChoice + smallUserLabel + " equals to " + computerChoice + smallCompLabel +". It's a draw.";
}

function getComputerChoice(){
   const choices = ['Rock', 'Paper', 'Scissor'];
   const randomNum = Math.floor(Math.random() * 5 )//generating rounded random number between 0..4
   return choices[randomNum];
}



function main(){
   rock_div.addEventListener('click', function(){
      game("Rock");
   })
   
   paper_div.addEventListener('click', function(){
      game("Paper");
   })
   
   scissor_div.addEventListener('click', function(){
      game("Scissor");
   })

   lizard_div.addEventListener('click', function(){
      game("Lizard");
   })

   spock_div.addEventListener('click', function(){
      game("Spock");
   })
}

main();

