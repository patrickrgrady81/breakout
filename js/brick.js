export default class Brick { 
  constructor(x, y) { 
    this.pos = { x, y }
    this.width = 80;
    this.height = 20;
  }

  draw = (ctx) => { 
    ctx.fillStyle = "green";
    ctx.fillRect(this.pos.x, this.pos.y, this.width, this.height);
  }
}