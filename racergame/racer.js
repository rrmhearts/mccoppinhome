class Racer {
  
  constructor() {
    this.pos = createVector(floor(w/2), floor(h/2));
    this.xdir = 0;
    this.ydir = 0;
    this.len = 0;
  }
  
  setDir(xd, yd) {
  	this.xdir = xd;
    this.ydir = yd;
  }
  
  update() {
    this.pos.x += this.xdir;
    this.pos.y += this.ydir;
    // Easy mode
    //this.xdir = 0;
    //this.ydir = 0;
  }
  
  gamePos() {
    return this.pos;
  }
  
  show() {
    fill(255, 0, 0);
    noStroke();
    rect(this.pos.x, this.pos.y, 1, 1)
  }

}
