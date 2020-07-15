export default class Globals { 
  constructor(canvas) { 
    this.canvas = canvas
    this.width = canvas.width;
    this.height = canvas.height;
    this.bgColor = "white";

    this.gameState = {
      menu: true,
      running: false,
      paused: false,
      gameOver: false
    }

    this.edit = false;
  }
}