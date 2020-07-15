export default class Game { 

  constructor(globals, ball, paddle, menu, levels) { 
    this.globals = globals;
    this.ctx = globals.canvas.getContext("2d");
    this.ball = ball;
    this.paddle = paddle;
    this.bricks = levels.level[levels.currentLevel-1].bricks;
    this.menu = menu;
    this.brickCount = this.bricks.length;

    window.requestAnimationFrame(this.play);
  }
 
  clear = (color) => { 
    this.ctx.fillStyle = color;
    this.ctx.fillRect(0 ,0, this.globals.width, this.globals.height);
  }

  ballPaddleCollide = () => { 
    let collision = false;
    if (this.ball.pos.x >= this.paddle.pos.x) { 
      if (this.ball.pos.x >= this.paddle.pos.x && this.ball.pos.x + this.ball.size < this.paddle.pos.x + this.paddle.width) { 
        if (this.ball.pos.y + this.ball.size -4 >= this.paddle.pos.y && this.ball.pos.y < this.paddle.pos.y + this.paddle.height)
        collision = true;
      }
    }
    return collision;
  }

  ballBrickCollide = () => { 
    for (let i = 0; i < this.bricks.length; i++){
      if (this.ball.pos.x >= this.bricks[i].pos.x) { 
        if (this.ball.pos.x >= this.bricks[i].pos.x && this.ball.pos.x + this.ball.size < this.bricks[i].pos.x + this.bricks[i].width) {
          if (this.ball.pos.y + this.ball.size >= this.bricks[i].pos.y && this.ball.pos.y < this.bricks[i].pos.y + this.bricks[i].height){
            return this.bricks[i];
          }
        }
      }
    };
    return null;
  }

  play = () => { 
    this.clear(this.globals.bgColor);
    this.bricks.forEach(brick => { 
      brick.draw(this.ctx);
    });
    this.paddle.update();
    this.paddle.draw(this.ctx);
    this.ball.update();
    this.ball.draw(this.ctx);
    this.ball.collision(this.ballPaddleCollide());
    const brick = this.ballBrickCollide()
    if (brick) { 
      this.ball.collision(true);
      this.bricks = this.bricks.filter(b => b.id !== brick.id);
    }
    this.brickCount = this.bricks.length;
    if (this.globals.gameState.menu || this.globals.gameState.paused) this.menu.show(this.ctx, this);
    window.requestAnimationFrame(this.play);
  }
}