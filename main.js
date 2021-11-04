// CANVAS SEUTP
let canvas = document.querySelector("#my-canvas");
let ctx = canvas.getContext("2d");
let time = 20;
let timeDifficulty = 20;

let winnerScreen = document.querySelector("#winnerscreen");
let gameoverScreen = document.querySelector("#gameoverscreen");

let restartBtnGo = document.querySelector("#restart-btn");
let nextLevel = document.querySelector("#next-btn");

let thescore = document.querySelector("#thescore");
let theTime = document.querySelector("#thetime");
//let scoreSection = document.querySelector(".score");
let mainSection = document.querySelector(".main-content");

let skullsSection = document.querySelector(".img-skull");
//let imgSkull = document.querySelector("#imageId");

let levelSection = document.querySelector("#skulls");
let scoreLevels = document.querySelector(".score-and-levels");

let game;

const startGame = () => {
  //Hide splash screen
  winnerScreen.style.display = "none";
  gameoverScreen.style.display = "none";
  mainSection.style.display = "flex";
  //Show canvas
  //Start game
  // We wil have a class for the game that when is clicked it starts new game.
  game = new Game(0, 0, time);
  game.startTimer();
  game.gameLoop();
};

const nextOne = () => {
  mainSection.style.display = "flex";
  winnerScreen.style.display = "none";
  game.score += 50;
  game.faceCount += 10;
  if (timeDifficulty > 2) timeDifficulty -= 2;
  game = new Game(game.score, game.faceCount, timeDifficulty);
  game.startTimer();
  game.gameLoop();
};

nextLevel.addEventListener("click", nextOne);
restartBtnGo.addEventListener("click", startGame);

canvas.addEventListener("mousedown", (e) => {
  game.getCursorPosition(canvas, e);
});

startGame();
