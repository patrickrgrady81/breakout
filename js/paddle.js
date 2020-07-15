export default class Paddle { 
  constructor(globals) { 
    this.globals = globals;
    this.width = 100;
    this.height = 12;
    this.speed = 0;
    this.pos = { x: globals.width / 2 - this.width / 2 + 2, y: globals.height - 40 };

    this.keyDown = {
      left: false,
      right: false
    }

    window.addEventListener("keydown", e => {
      if (e.keyCode === 65 || e.keyCode === 68) {
        console.log(`${e.keyCode} keydown`);
        switch (e.keyCode) {
          case 65:
            this.keyDown.left = true;
            break;
          case 68:
            this.keyDown.right = true;
            break;
        }
      }

    });

    window.addEventListener("keyup", e => { 
      if (e.keyCode === 65 || e.keyCode === 68) {
        console.log(`${e.keyCode} keyup`);
        switch (e.keyCode) {
          case 65:
            this.keyDown.left = false;
            break;
          case 68:
            this.keyDown.right = false;
            break;
        }
      }
    });
  }

  draw = (ctx) => { 
    ctx.fillStyle = "red";
    ctx.fillRect(this.pos.x, this.pos.y, this.width, this.height);
  }

  update = () => { 
    if (this.keyDown.left === true) {
      this.speed = -5;
    } else if (this.keyDown.right === true) {
      this.speed = 5;
    } else { 
      this.speed = 0;
    }

    this.pos.x += this.speed;
  }
}