let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".scoreboard");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");
const reset_div = document.getElementById("reset");

function reset(){
   reset_div.addEventListener('click', function(){
      computerScore = 0;
      userScore = 0;
      computerScore_span.innerHTML = computerScore;
      userScore_span.innerHTML = userScore;
      result_p.innerHTML = " ";
   })
}

function game(userChoice){
   const computerChoice = getComputerChoice();
   if(userChoice ==="Piedrinha" && computerChoice==="Tijeretovich" ){
      win(userChoice, computerChoice);
   }else if(userChoice==="Tijeretovich" && computerChoice==="Papelinho"){
      win(userChoice, computerChoice);
   }else if(userChoice==="Papelinho" && computerChoice==="Piedrinha"){
      win(userChoice, computerChoice);
   }else if(userChoice==="Tijeretovich" && computerChoice==="Tijeretovich"){
      draw(userChoice, computerChoice);
   }else if(userChoice==="Papelinho" && computerChoice==="Papelinho"){
      draw(userChoice, computerChoice);
   }   else if(userChoice==="Piedrinha" && computerChoice==="Piedrinha"){
      draw(userChoice, computerChoice);
   }else{
      lose(userChoice, computerChoice);
   
   }
   
}
function getComputerChoice() {
   const choices = ["Piedrinha", "Papelinho", "Tijeretovich"];
   const randomNumber=(Math.floor(Math.random()*3));
   return choices[randomNumber]
}

function win(userChoice, computerChoice) {
   userScore++;
   userScore_span.innerHTML = userScore;
   computerScore_span.innerHTML = computerScore;
   result_p.innerHTML = userChoice + " le gana a " + computerChoice + ". Ganaste brote3r";

}

function lose(userChoice, computerChoice){
   computerScore++;
   computerScore_span.innerHTML = computerScore;
   userScore_span.innerHTML = userScore;
   result_p.innerHTML = userChoice + " pierde contra " + computerChoice + ". Sos re maleta XD.";
}
function draw(userChoice, computerChoice){
   result_p.innerHTML = "Empata3";
}

function main(){
   rock_div.addEventListener('click', function(){
      game("Piedrinha")
   })
   paper_div.addEventListener('click', function(){
      game("Papelinho")
   })
   scissors_div.addEventListener('click', function(){
      game("Tijeretovich")
   })
}
function endGame() {
   userScore = 0;
   computerScore = 0;
   userScore_span.innerHTML = userScore;
   compScore_span.innerHTML = compScore;
   result_p.innerHTML = ``;
   rock_div.removeAttribute("disabled");  paper_div.removeAttribute("disabled");  scissors_div.removeAttribute("disabled");
 }

main();
reset();
