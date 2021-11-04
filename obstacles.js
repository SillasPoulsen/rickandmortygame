class Faces {
  //properties
  constructor(srcImage) {
    this.Image = new Image();
    this.Image.src = srcImage; // dynamic
    this.width = 80;
    this.height = 100;
    this.x = Math.random() * (canvas.width - 50);
    this.y = Math.random() * (canvas.height - 50);
  }

  //Methods
  drawFaces = () => {
    ctx.drawImage(this.Image, this.x, this.y, this.width, this.height);
  };
}
