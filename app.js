var computerChoice;
var choice = ["rock", "paper", "scissors"]
var docs = document.getElementById("result")
function play(playerChoice) {
  computerChoice = choice[Math.floor(Math.random() * 3)]
  if(playerChoice == computerChoice){
    docs.innerHTML = "<strong>Draw!</strong> The Computer Chose " + computerChoice
  } else if((playerChoice === "rock" && computerChoice === "paper") || (playerChoice === "paper" && computerChoice === "scissors") || (playerChoice === "scissors" && computerChoice === "rock") ){
    docs.innerHTML = "<strong>You Loose!</strong> The Computer Chose " + computerChoice
  } else{
    docs.innerHTML = "<strong>You Win!</strong> The Computer Chose " + computerChoice
  }
}
function reset() {
  docs.innerHTML = 'Choose Your Weapon'
}


































  // } else if(playerChoice === "paper" && computerChoice === "rock"){
  //   docs.innerHTML = "You Win"
  //   CompChoice()
  // }else if(playerChoice === "paper" && computerChoice === "scissors"){
  //   docs.innerHTML = "You Loose"
  //   CompChoice()
  // } else if(playerChoice === "scissor" && computerChoice === "rock"){
  //   docs.innerHTML = "You Loose"
  //   CompChoice()
  // } else if(playerChoice === "scissor" && computerChoice === "paper"){
  //   docs.innerHTML = "You Win"
  //   CompChoice()
  // }


  // ((playerChoice === "rock" && computerChoice === "scissors") || (playerChoice === "paper" && computerChoice === "rock") || (playerChoice === "scissors" && computerChoice === "paper"))