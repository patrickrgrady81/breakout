import Brick from "../brick.js"

export default class L1 { 
  constructor() { 
    this.bricks = [];
    this.bricks.push(new Brick(60, 65));
    this.bricks.push(new Brick(160, 65));
    this.bricks.push(new Brick(260, 65));
    this.bricks.push(new Brick(360, 65));
    this.bricks.push(new Brick(460, 65));
    this.bricks.push(new Brick(560, 65));
    this.bricks.push(new Brick(660, 65));
  }
}