class Richguy {
  //properties
  constructor() {
    this.richguyImage = new Image();
    this.arrayOfImages = [
      "./images/billGatesAlien (12).png",
      "./images/elon2.png",
      "./images/jeff2.png",
    ];
    this.randomRichGuy = Math.floor(Math.random() * 3);
    this.richguyImage.src = this.arrayOfImages[this.randomRichGuy];
    this.width = 80;
    this.height = 100;
    this.x = Math.random() * (canvas.width - 150);
    this.y = Math.random() * (canvas.height - 150);
  }

  //Methods

  drawRichGuy = () => {
    ctx.drawImage(this.richguyImage, this.x, this.y, this.width, this.height);
  };
}
