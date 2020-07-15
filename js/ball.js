export default class Ball { 
  constructor(globals) { 
    this.globals = globals;
    this.size = 15;
    this.pos = { x: globals.width / 2, y: globals.height / 2 };
  }

  draw = (ctx) => { 
    ctx.fillStyle = "blue";
    ctx.fillRect(this.pos.x, this.pos.y, this.size, this.size);
  }

  update = () => { 

  }
}