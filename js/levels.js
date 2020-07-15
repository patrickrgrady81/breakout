import L1 from "./levels/L1.js";
  
export default class Levels { 
  constructor() { 
    this.currentLevel = 1
    this.level = [];
    this.level.push(new L1());
  }
}