export default class Paddle { 
  constructor(globals) { 
    this.globals = globals;
    this.width = 100;
    this.height = 12;
    this.pos = { x: globals.width / 2 - this.width / 2 + 2, y: globals.height - 40 };
  }

  draw = (ctx) => { 
    ctx.fillStyle = "red";
    ctx.fillRect(this.pos.x, this.pos.y, this.width, this.height);
  }

  update = () => { 

  }
}