let userScore = 0;
let compScore = 0;
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const index = Math.floor(Math.random() * options.length);
  return options[index];
};

const drawGame = () => {
  msg.innerText = "It's a tie.";
  msg.style.backgroundColor = "grey";
  msg.style.color = "white";
};

const playGame = (userChoice) => {
  const compChoice = genCompChoice();
  if (userChoice === compChoice) {
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      userWin = compChoice === "scissors" ? true : false;
    } else if (userChoice === "paper") {
      userWin = compChoice === "rock" ? true : false;
    } else if (userChoice === "scissors") {
      userWin = compChoice === "paper" ? true : false;
    }
    showWinner(userWin, userChoice, compChoice);
  }
};
const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    msg.innerText = `You win! ${userChoice} beats ${compChoice}.`;
    msg.style.backgroundColor = "green";
    msg.style.color = "white";
    userScore++;
    userScorePara.innerText = userScore;
  } else {
    msg.innerText = `You lose. ${compChoice} beats ${userChoice}`;
    msg.style.backgroundColor = "red";
    msg.style.color = "white";
    compScore++;
    compScorePara.innerText = compScore;
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.querySelector("img").id;
    playGame(userChoice);
  });
});
