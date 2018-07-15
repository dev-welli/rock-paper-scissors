
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
   console.log("BLAH " + userChoice);
}

function main(){
   rock_div.addEventListener('click', function(){
      game("ROCK");
   })
   
   paper_div.addEventListener('click', function(){
      game("PAPER");
   })
   
   scissor_div.addEventListener('click', function(){
      game("SCISSOR");
   })
}

main();

