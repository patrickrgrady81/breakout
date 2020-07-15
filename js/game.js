export default class Game { 

  constructor(globals, ball, paddle, menu, levels) { 
    this.globals = globals;
    this.ctx = globals.canvas.getContext("2d");
    this.ball = ball;
    this.paddle = paddle;
    this.bricks = levels.level[levels.currentLevel-1].bricks;
    this.menu = menu;
    this.prevTime = 0;

    window.requestAnimationFrame(this.play);
  }
 
  clear = (color) => { 
    this.ctx.fillStyle = color;
    this.ctx.fillRect(0 ,0, this.globals.width, this.globals.height);
  }

  ballPaddleCollide = () => { 
    if (this.ball.pos.x >= this.paddle.pos.x) { 
      if (this.ball.pos.x >= this.paddle.pos.x && this.ball.pos.x + this.ball.size < this.paddle.pos.x + this.paddle.width) { 
        if (this.ball.pos.y + this.ball.size -4 >= this.paddle.pos.y && this.ball.pos.y < this.paddle.pos.y + this.paddle.height)
        return true;
      }
    }
    return false;
  }


  play = (time) => { 
    var currentProgress = time - this.prevTime;
    this.clear(this.globals.bgColor);
    this.bricks.forEach(brick => { 
      brick.draw(this.ctx);
    });
    this.paddle.update();
    this.paddle.draw(this.ctx);
    this.ball.update();
    this.ball.draw(this.ctx);
    this.ball.collideWithPaddle(this.ballPaddleCollide());

    if (this.globals.gameState.menu || this.globals.gameState.paused) this.menu.show(this.ctx, this);
    this.prevTime = time;
    window.requestAnimationFrame(this.play);
  }
}