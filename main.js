
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

function game(userChoice){
   const computerChoice = getComputerChoice();
   //console.log("user choice: " + userChoice);
   //console.log("computer choice: " +  computerChoice);

   switch (userChoice + computerChoice){
      case "RockScissor":
      case "PaperRock":
      case "ScissorPaper":
         win(userChoice, computerChoice);
         break;
      case "RockPaper":
      case "PaperScissor":
      case "ScissorRock":
         lose(userChoice, computerChoice);
         break;
      case "RockRock":
      case "PaperPaper":
      case "ScissorScissor":
         draw(userChoice, computerChoice);
         break;
   }
}

function win(userChoice, computerChoice){
   console.log("USER WINS");
   userScore++;
   console.log(userScore);
   userScore_span.innerHTML = userScore;
   result_p.innerHTML = userChoice + " beats " + computerChoice +". You win!";
}

function lose(userChoice, computerChoice){
   console.log("COMPUTER WINS")
   computerScore++;
   console.log(computerScore);
   computerScore_span.innerHTML = computerScore;
   result_p.innerHTML = userChoice + " loses to " + computerChoice +". You lose!";
}

function draw(userChoice, computerChoice){
   console.log("DRAW!")
   result_p.innerHTML = userChoice + " equals to " + computerChoice +". It's a draw.";
}

function getComputerChoice(){
   const choices = ['Rock', 'Paper', 'Scissor'];
   const randomNum = Math.floor(Math.random() * 3 )//generating rounded random number between 0..2
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
}

main();

