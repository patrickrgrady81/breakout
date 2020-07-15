export default class Game { 

  constructor(globals, ball, paddle) { 
    this.globals = globals;
    this.ctx = globals.canvas.getContext("2d");
    this.ball = ball;
    this.paddle = paddle;
    this.prevTime = 0;
    window.requestAnimationFrame(this.play);
  }
 
  clear = (color) => { 
    this.ctx.fillStyle = color;
    this.ctx.fillRect(0 ,0, this.globals.width, this.globals.height);
  }

  play = (time) => { 
    var currentProgress = time - this.prevTime;
    // console.log(this.inputHandler);
    this.clear(this.globals.bgColor);
    this.ball.draw(this.ctx);
    this.paddle.update();
    this.paddle.draw(this.ctx);
    this.prevTime = time;
    window.requestAnimationFrame(this.play);
  }
}