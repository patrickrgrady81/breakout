export default class Menu { 
  constructor(globals) { 
    this.globals = globals;

    window.addEventListener("keydown", e => { 
      if (e.keyCode === 32) { 
        if (this.globals.gameState.menu) {
          this.globals.gameState.menu = false;
          this.globals.gameState.running = true;
        } else if (this.globals.gameState.running) {
          this.globals.gameState.running = false;
          this.globals.gameState.paused = true;
        } else if (this.globals.gameState.paused) { 
          this.globals.gameState.paused = false;
          this.globals.gameState.running = true;
        }
      }
    });
  }

  show = (ctx) => { 
    ctx.fillStyle = "orange"
    ctx.font = "30px Arial";
    ctx.fillText("Press Space To Continue", this.globals.width / 2 - 150, this.globals.height / 2 - 30);
  }
}