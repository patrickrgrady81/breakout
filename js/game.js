export default class Game { 

  constructor(ctx, globals) { 
    this.ctx = ctx;
    this.globals = globals;
  }
 
  clear = (color) => { 
    this.ctx.fillStyle = color;
    this.ctx.fillRect(0 ,0, this.globals.width, this.globals.height);
  }
}