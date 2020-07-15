export default class Brick { 
  constructor(id, x, y) { 
    this.id = id;
    this.pos = { x, y }
    this.width = 80;
    this.height = 20;
  }

  draw = (ctx) => { 
    ctx.fillStyle = "green";
    ctx.fillRect(this.pos.x, this.pos.y, this.width, this.height);
  }

  collideWithBall = () => { 
    console.log(this.id);
  }
}