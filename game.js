class Game {
  //Properties
  constructor(score, faceCount, timeRemaining) {
    this.bg = new Image();
    this.bg.src = "./images/S2e3_mount_morty_and_summer.png";
    this.richguy = new Richguy();
    this.isGameOver = false;
    this.hasWon = false;
    this.clickedX = 0;
    this.clickedY = 0;
    this.faceArr = [new Faces("./images/faces/pngegg.png", 0)];
    this.gabBetweenPipes = 200;
    this.score = score;
    this.faceCount = faceCount + 20;
    this.timeRemaining = 5 - timeRemaining;
    this.intervalId = undefined;
  }

  // Methods

  startTimer = () => {
    console.log("TIMER STARTED");

    const updateTimerBound = this.updateTimer.bind(this);

    this.intervalId = setInterval(updateTimerBound, 1000);
  };

  updateTimer = () => {
    this.timeRemaining -= 1;
    console.log(this.timeRemaining);
    if (this.timeRemaining === 0) {
      this.gameOver();
    }
  };

  cancelTimer = () => {
    clearInterval(this.intervalId);
  };

  updateTime = () => {
    theTime.innerText = this.timeRemaining;
  };

  showLevel = () => {
    const DOM_img = document.createElement("img");
    DOM_img.style.width = "200px";
    DOM_img.style.padding = "5px";
    DOM_img.src = "images/pngwing.com.png";
    DOM_img.setAttribute("id", "imageId");
    console.log(DOM_img);
    skullsSection.appendChild(DOM_img);
  };

  deleteLevels = () => {
    const elementToBeRemoved = document.getElementById("imageId");
    elementToBeRemoved.parentNode.removeChild(elementToBeRemoved);
  };

  gameOver = () => {
    this.cancelTimer();
    this.isGameOver = true;
    canvas.style.display = "none";
    mainSection.style.display = "none";
    gameoverScreen.style.display = "flex";
    this.cancelTimer();
    this.deleteLevels();
    console.log("you lost");
  };

  checkIfWon = () => {
    if (
      this.richguy.x - 10 < this.clickedX &&
      this.richguy.x - 20 + this.richguy.width > this.clickedX &&
      this.richguy.y < this.clickedY &&
      this.richguy.y + this.richguy.height > this.clickedY
    ) {
      //this.hasWon = true;
      canvas.style.display = "none";
      scoreSection.style.display = "none";
      //levelSection.style.display = "none";  //this needs fixing!
      winnerscreen.style.display = "flex";
      //countdown.style.display = "none";
      this.cancelTimer();
      this.showLevel();
      this.hasWon = true;
    }
  };

  increaseScore = () => {
    thescore.innerText = this.score;
  };

  getCursorPosition = (canvas, event) => {
    const rect = canvas.getBoundingClientRect();
    this.clickedX = event.clientX - rect.left;
    this.clickedY = event.clientY - rect.top;
    console.log("x: " + this.clickedX + " y: " + this.clickedY);
  };

  addFaces = () => {
    let faces = [
      "./images/faces/pngegg (1).png",
      "./images/faces/pngegg (2).png",
      "./images/faces/pngegg (3).png",
      "./images/faces/pngegg (3).png",
      "./images/faces/pngegg (4).png",
      "./images/faces/pngegg (5).png",
      "./images/faces/pngegg (6).png",
      "./images/faces/pngegg (7).png",
      "./images/faces/pngegg (8).png",
      "./images/faces/pngegg (9).png",
      "./images/faces/pngegg (10).png",
      "./images/faces/pngegg (11).png",
      "./images/faces/pngegg (12).png",
      "./images/faces/pngegg (13).png",
      "./images/faces/pngegg (14).png",
      "./images/faces/pngegg (15).png",
      "./images/faces/pngegg (16).png",
      "./images/faces/pngegg (17).png",
      "./images/faces/pngegg (18).png",
      "./images/faces/pngegg (19).png",
      "./images/faces/pngegg (20).png",
      "./images/faces/pngegg (21).png",
      "./images/faces/pngegg (22).png",
      "./images/faces/pngegg (23).png",
      "./images/faces/pngegg (24).png",
    ];

    if (this.faceArr.length <= this.faceCount) {
      let index = Math.floor(Math.random() * faces.length);
      let face = new Faces(faces[index]);
      this.faceArr.push(face);
    }
  };

  gameLoop = () => {
    //1.Clear the canvas

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    //Draw elements
    ctx.drawImage(this.bg, 0, 0, canvas.width, canvas.height);
    scoreSection.style.display = "flex";

    this.addFaces();
    this.faceArr.forEach((eachFace) => {
      eachFace.drawFaces();
    });
    this.richguy.drawRichGuy();

    this.updateTime();
    this.checkIfWon();
    this.increaseScore();
    //this.showLevel();

    if (!this.hasWon) {
      requestAnimationFrame(this.gameLoop);
    }
  };
}

/*

var countdownNumberEl = document.getElementById("countdown-number");
var countdown = 10;
countdownNumberEl.textContent = countdown;
setInterval(function () {
  countdown = --countdown <= 0 ? 10 : countdown;
  countdownNumberEl.textContent = countdown;
  if (countdown === 1) {
    this.gameOver();
  }
}, 1000);

*/
