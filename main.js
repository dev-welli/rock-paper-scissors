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
         var customWord = " crushes ";
         win(userChoice, customWord, computerChoice);
         break;
      case "LizardSpock":
         var customWord = " poisons ";
         win(userChoice, customWord, computerChoice);
         break;
      case "LizardPaper":
         var customWord = " eats ";
         win(userChoice, customWord, computerChoice);
         break;
      case "SpockScissor":
         var customWord = " smashes ";
         win(userChoice, customWord, computerChoice);
         break;
      case "SpockRock":
         var customWord = " vaporises ";
         win(userChoice, customWord, computerChoice);
         break;
      case "ScissorLizard":
         var customWord = " decapitates ";
         win(userChoice, customWord, computerChoice);
         break;
      case "ScissorPaper":
         var customWord = " cuts ";
         win(userChoice, customWord, computerChoice);
         break;
      case "PaperSpock":
         var customWord = " disproves ";
         win(userChoice, customWord, computerChoice);
         break;
      case "PaperRock":
         var customWord = " covers ";
         win(userChoice, customWord, computerChoice);
         break;
      case "RockPaper":
         var customWord = " covered by ";
         lose(userChoice, customWord, computerChoice);
         break;
      case "RockSpock":
         var customWord = " vaporised by ";
         lose(userChoice, customWord, computerChoice);
         break;
      case "PaperScissor":
         var customWord = " cut by ";
         lose(userChoice, customWord, computerChoice);
         break;
      case "PaperLizard":
         var customWord = " eaten by ";
         lose(userChoice, customWord, computerChoice);
         break;
      case "ScissorRock":
      case "LizardRock":
         var customWord = " crushed by ";
         lose(userChoice, customWord, computerChoice);
         break;
      case "ScissorSpock":
         var customWord = " smashed by ";
         lose(userChoice, customWord, computerChoice);
         break;
      case "LizardScissor":
         var customWord = " decapitated by ";
         lose(userChoice, customWord, computerChoice);
         break;
      case "SpockLizard":
         var customWord = " poisoned by ";
         lose(userChoice, customWord, computerChoice);
         break;
      case "SpockPaper":
         var customWord = " disproved by ";
         lose(userChoice, customWord, computerChoice);
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

function win(userChoice, customWord, computerChoice){
   const smallUserLabel = "user".fontsize(4).sub();
   const smallCompLabel = "comp".fontsize(4).sub();
   console.log("USER WINS");
   userScore++;
   console.log(userScore);
   userScore_span.innerHTML = userScore;
   result_p.innerHTML = userChoice + smallUserLabel + customWord + computerChoice + smallCompLabel + ". You win!";
}

function lose(userChoice, customWord, computerChoice){
   const smallUserLabel = "user".fontsize(4).sub();
   const smallCompLabel = "comp".fontsize(4).sub();
   console.log("COMPUTER WINS")
   computerScore++;
   console.log(computerScore);
   computerScore_span.innerHTML = computerScore;
   result_p.innerHTML = userChoice + smallUserLabel + customWord + computerChoice + smallCompLabel +". You lose!";
}

function draw(userChoice, computerChoice){
   const smallUserLabel = "user".fontsize(4).sub();
   const smallCompLabel = "comp".fontsize(4).sub();
   console.log("DRAW!")
   result_p.innerHTML = userChoice + smallUserLabel + " equals to " + computerChoice + smallCompLabel +". It's a draw.";
}

function getComputerChoice(){
   const choices = ['Rock', 'Paper', 'Scissor', 'Lizard', 'Spock'];
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

