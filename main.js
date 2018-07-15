
//caching the DOM elements
const userScore = 0;
const computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissor_div = document.getElementById("scissor");

function game(userChoice){
   const computerChoice = getComputerChoice();
   //console.log("user choice: " + userChoice);
   //console.log("computer choice: " +  computerChoice);

   switch (userChoice + computerChoice){
      case "rockscissor":
      case "paperrock":
      case "scissorpaper":
         console.log("USER WINS");
         break;
      case "rockpaper":
      case "paperscissor":
      case "scissorrock":
         console.log("COMPUTER WINS")
         break;
      case "rockrock":
      case "paperpaper":
      case "scissorscissor":
         console.log("DRAW!")
         break;
   }
}

function getComputerChoice(){
   const choices = ['rock', 'paper', 'scissor'];
   const randomNum = Math.floor(Math.random() * 3 )//generating rounded random number between 0..2
   return choices[randomNum];
}



function main(){
   rock_div.addEventListener('click', function(){
      game("rock");
   })
   
   paper_div.addEventListener('click', function(){
      game("paper");
   })
   
   scissor_div.addEventListener('click', function(){
      game("scissor");
   })
}

main();

