class Richguy {
  //properties
  constructor() {
    this.richguyImage = new Image();
    this.richguyImage.src = "./images/elon (24).png";
    this.width = 150;
    this.height = 150;
    this.x = Math.random() * (canvas.width - 150);
    this.y = Math.random() * (canvas.height - 150);
  }

  //Methods
  drawRichGuy = () => {
    ctx.drawImage(this.richguyImage, this.x, this.y, this.width, this.height);
  };

  // cause the game to end
  //Create boolean to check if the game is ended.
}
