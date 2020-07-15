export default class InputHandler { 
  constructor() { 
    window.addEventListener("keydown", e => {
      // console.log(`${e.keyCode} keydown`);
      // 65 = a
      // 68 = d
      switch (e.keyCode) { 
        case 65: return -5;
        case 68: return 5;
      }

    });

    window.addEventListener("keyup", e => { 
      // console.log(`${e.keyCode} keyup`);
      return 0;
    });
  }
}