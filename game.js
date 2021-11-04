class Game {
  //Properties
  constructor(score, faceCount, time) {
    this.bg = new Image();
    this.bg.src = "./images/S2e3_mount_morty_and_summer.png";
    this.richguy = new Richguy();
    this.hasWon = false;
    this.gameIsOver = false;
    this.clickedX = 0;
    this.clickedY = 0;
    this.faceArr = [new Faces("./images/faces/pngegg.png", 0)];
    this.score = score;
    this.faceCount = faceCount + 10;
    this.timeRemaining = time;
    this.intervalId = undefined;
    this.gameMusic = new Audio("./images/giveusmoney3.mp3");
  }

  // Methods

  startTimer = () => {
    const updateTimerBound = this.updateTimer.bind(this);

    this.intervalId = setInterval(updateTimerBound, 1000);
  };

  updateTimer = () => {
    this.timeRemaining -= 1;
    console.log(this.timeRemaining);
    if (this.timeRemaining === 0) {
      timeDifficulty = 20;
      this.gameIsOver = true;
    }
  };

  cancelTimer = () => {
    clearInterval(this.intervalId);
  };

  updateTime = () => {
    theTime.innerText = this.timeRemaining;
  };

  addLevel = () => {
    const DOM_img = document.createElement("img");
    DOM_img.style.width = "150px";
    DOM_img.style.padding = "5px";
    DOM_img.src = "images/pngwing.com.png";
    DOM_img.classList.add("imageId");
    console.log(DOM_img);
    skullsSection.appendChild(DOM_img);
  };

  deleteLevels = () => {
    let images = document.getElementsByClassName("imageId");
    skullsSection.replaceChildren(images);
    console.log("deleting", skullsSection);
  };

  gameOver = () => {
    console.log("gameover!");
    console.log(mainSection);
    mainSection.style.display = "none";
    gameoverScreen.style.display = "flex";
    this.deleteLevels();
    this.cancelTimer();
  };

  checkIfWon = () => {
    if (
      this.richguy.x - 10 < this.clickedX &&
      this.richguy.x - 20 + this.richguy.width > this.clickedX &&
      this.richguy.y < this.clickedY &&
      this.richguy.y + this.richguy.height > this.clickedY
    ) {
      this.hasWon = true;
      mainSection.style.display = "none";
      winnerscreen.style.display = "flex";
      this.gameMusic.play();
      this.cancelTimer();
      this.addLevel();
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
    mainSection.style.display = "flex";
    //scoreLevels.style.display = "flex";

    this.addFaces();
    this.faceArr.forEach((eachFace) => {
      eachFace.drawFaces();
    });
    this.richguy.drawRichGuy();
    //this.audio.play();
    //this.timeLevel();
    this.updateTime();
    this.checkIfWon();
    this.increaseScore();

    //this.showLevel();
    if (this.gameIsOver) {
      this.gameOver();
    } else if (!this.hasWon) {
      requestAnimationFrame(this.gameLoop);
    }
  };
}
