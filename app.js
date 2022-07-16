function computerPlay() {
  let choices = ["rock", "paper", "scissors"];
  let random = Math.floor(Math.random() * choices.length);
  return choices[random];
}

function playRound() {
  let playerSelection = prompt(
    "Choice: rock , paper or scissors",
    "".toLowerCase()
  );

  let computerSelection = computerPlay();

  if (playerSelection == "rock") {
    if (computerSelection == "paper") {
      computerScore++;
      return lose;
    } else if (computerSelection == "scissors") {
      playerScore++;
      return win;
    } else {
      return draw;
    }
  } else if (playerSelection == "paper") {
    if (computerSelection == "scissors") {
      computerScore++;
      return lose;
    } else if (computerSelection == "rock") {
      playerScore++;
      return win;
    } else {
      return draw;
    }
  } else if (playerSelection == "scissors") {
    if (computerSelection == "rock") {
      computerScore++;
      return lose;
    } else if (computerSelection == "paper") {
      playerScore++;
      return win;
    } else {
      return draw;
    }
  }
}

let computerScore = 0;
let playerScore = 0;
let win = "You win";
let lose = "You lose";
let draw = "It is a  draw";

function game() {
  for (i = 0; i < 5; i++) {
    console.log(playRound());
  }
  if (playerScore == computerScore) {
    console.log("It is a draw");
  } else if (playerScore > computerScore) {
    console.log("Player win!");
  } else {
    console.log("Computer Win!");
  }
}
game();
