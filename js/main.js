import Game from "./game.js";
import Globals from "./globals.js";
import Ball from "./ball.js";
import Paddle from "./paddle.js";


const run = () => { 
  const canvas = document.getElementById("canvas");

  const globals = new Globals(canvas);
  const ball = new Ball(globals);
  const paddle = new Paddle(globals);

  const game = new Game(globals, ball, paddle);

  game.play();
}

window.addEventListener("DOMContentLoaded", run);
