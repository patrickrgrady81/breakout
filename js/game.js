export default class Game { 

  constructor(globals, ball, paddle) { 
    this.globals = globals;
    this.ctx = globals.canvas.getContext("2d");
    this.ball = ball;
    this.paddle = paddle;
  }
 
  clear = (color) => { 
    this.ctx.fillStyle = color;
    this.ctx.fillRect(0 ,0, this.globals.width, this.globals.height);
  }

  play = () => { 
    this.clear(this.globals.bgColor);
    this.ball.draw(this.ctx);
    this.paddle.draw(this.ctx);
  }
}