export default class Ball { 
  constructor(globals) { 
    this.globals = globals;
    this.size = 15;
    this.xspeed = 2;
    this.yspeed = 2;
    this.pos = { x: globals.width / 2, y: globals.height / 2 };
  }

  bound = () => { 
    if (this.pos.x < 0) this.xspeed = -this.xspeed;
    if (this.pos.y < 0) this.yspeed = -this.yspeed;
    if (this.pos.x + this.size > this.globals.width) this.xspeed = -this.xspeed;
    if (this.pos.y + this.size > this.globals.height) this.yspeed = -this.yspeed;
  }

  draw = (ctx) => { 
    ctx.fillStyle = "blue";
    ctx.fillRect(this.pos.x, this.pos.y, this.size, this.size);
  }

  update = () => { 
    if (this.globals.gameState.running) {
      this.pos.x += this.xspeed;
      this.pos.y += this.yspeed;
      this.bound();
    }
  }

  collision = (collision) => { 
    if (!collision) return;
    this.yspeed = -this.yspeed;
    this.update();
  }
}