class Environment {
  
  constructor() {
  	this.env = [];
    this.env[0] = createVector(floor(w/2), floor(0));
    this.xdir = 0;
    this.ydir = 0;
    this.len = 0;
  }
  
  setDir(x, y) {
  	this.xdir = x;
    this.ydir = y;
  }
  
  obstacle() {
    let x = floor(random(w));
    let y = floor(random(3));
    var obs = createVector(x, y);
    return obs;
  }
  
  addObstacle() {
    this.len++;
    this.env.push(this.obstacle());
  }
  
  update() {
  	for(let i = 0; i < this.env.length; i++) {
  	  if (this.env[i] == h)
  	  {
  	    this.env.shift();
  	  }
      this.env[i].y += 1;
  	}
  }
  
  endGame(pos) {
  	let x = this.env[this.env.length-1].x;
    let y = this.env[this.env.length-1].y;
    if(pos.x > w-1 || pos.x < 0 || pos.y > h-1 || pos.y < 0) {
       return true;
    }
    for(let i = 0; i < this.env.length-1; i++) {
    	let part = this.env[i];
      if(part.x == pos.x && part.y == pos.y) {
      	return true;
      }
    }
    return false;
  }
  
  show() {
  	for(let i = 0; i < this.env.length; i++) {
    	fill(0);
      noStroke();
      rect(this.env[i].x, this.env[i].y, 1, 1)
    }
  }

}
