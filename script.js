let player = "";
const cpu = computerPlay(3);
let result = "";
game(5);

function game(rounds) {
  
  for (rounds; rounds > 0; rounds--) {
        let playerPlay = prompt("Paper, Rock or Scissors?");
          if (playerPlay.toLowerCase() == "paper")
            {
              player = "Paper";
            }
            if (playerPlay.toLowerCase() == "rock")
            {
              player = "Rock";
            }
            if (playerPlay.toLowerCase() == "scissors")
            {
            player = "Scissors";
            }
          console.log(playRound(player, cpu));
          console.log(result);
      }

}
  

function computerPlay(max) {
  let tool = Math.floor(Math.random() * max);
  if (tool === 0) {
    return "Rock";
  }
  if (tool === 1) {
    return "Paper";
  } else {
    return "Scissors";
  }
}

 

function playRound(player, cpu) {
  if (player == "Paper" && cpu == "Rock") {
    result += 1;
    return "You Won! Paper beats Rock"
  }
  if (player == "Scissors" && cpu == "Paper") {
    result += 1;
    return "You Won! Scissors beats Paper"
  }
  if (player == "Rock" && cpu == "Scissors") {
    result += 1;
    return "You Won! Rock beats Scissors"
  }
  if (player == "Scissors" && cpu == "Rock") {
    result -= 1;
    return "You Lose! Rock beats Scissors"
  }
  if (player == "Paper" && cpu == "Scissors") {
    result -= 1;
    return "You Lose! Scissors beats Paper"
  }
  if (player == "Rock" && cpu == "Paper") {
    result -= 1;
    return "You Lose! Paper beats Rock"
  } else {
    return "Draw"
  }
}


if (result > 0) {
    console.log("You Won");
}
if (result < 0) {
  console.log("You Lose");
} else {
  console.log("Draw Game");
}