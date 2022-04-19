const player = "Paper";
const cpu = computerPlay(3);

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
console.log(player);
console.log(cpu);

function singleRound(player, cpu) {
  if (player == "Rock" && cpu == "Paper") {
    return "You Lose! Paper beats Rock"
  }
  if (player == "Paper" && cpu == "Rock") {
    return "You Won! Paper beats Rock"
  }
  if (player == "Scissors" && cpu == "Rock") {
    return "You Lose! Rock beats Scissors"
  }
  if (player == "Rock" && cpu == "Scissors") {
    return "You Won! Rock beats Scissors"
  }
  if (player == "Paper" && cpu == "Scissors") {
    return "You Lose! Scissors beats Paper"
  }
  if (player == "Scissors" && cpu == "Paper") {
    return "You Won! Scissors beats Paper"
  } else {
    return "Draw"
  }

}
//console.log(computerPlay(3));
console.log(singleRound(player, cpu));
//Make your function’s playerSelection parameter case-insensitive (so users can input rock, ROCK, RocK or any other variation).
