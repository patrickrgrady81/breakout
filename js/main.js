import Game from "./game.js";
import Globals from "./globals.js";

const run = () => { 
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");

  const globals = new Globals(canvas);
  const game = new Game(ctx, globals);

  game.clear(globals.bgColor);
}

window.addEventListener("DOMContentLoaded", run);
