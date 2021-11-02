// CANVAS SEUTP
let canvas = document.querySelector("#my-canvas");
let ctx = canvas.getContext("2d");

let winnerScreen = document.querySelector("#winnerscreen");
let gameoverScreen = document.querySelector("#gameoverscreen");
let nextLevel = document.querySelector("#next-btn");
let thescore = document.querySelector("#thescore");
let theTime = document.querySelector("#thetime");
let scoreSection = document.querySelector(".score");
let mainSection = document.querySelector(".main-content");
let restartBtnGo = document.querySelector("#restart-btn");
let skullsSection = document.querySelector(".img-skull");
let levelSection = document.querySelector("#skulls");

let game;

const startGame = () => {
  //Hide splash screen
  canvas.style.display = "flex";
  winnerScreen.style.display = "none";
  gameoverScreen.style.display = "none";
  mainSection.style.display = "flex";

  //Show canvas
  //Start game
  // We wil have a class for the game that when is clicked it starts new game.
  game = new Game(0, 0, 0);
  game.startTimer();
  game.gameLoop();
};

const nextOne = () => {
  canvas.style.display = "flex";
  winnerScreen.style.display = "none";
  game.score += 50;
  game.faceCount += 10;
  game.timeRemaining = 2;
  game = new Game(game.score, game.faceCount, game.timeRemaining);
  game.startTimer();
  game.gameLoop();
};

nextLevel.addEventListener("click", nextOne);
restartBtnGo.addEventListener("click", startGame);

canvas.addEventListener("mousedown", (e) => {
  game.getCursorPosition(canvas, e);
});

startGame();
