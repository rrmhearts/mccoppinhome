let race;
let rez = 20;
let food;
let w;
let h;

function setup() {
  createCanvas(400, 400);
  w = floor(width / rez);
  h = floor(height / rez);
  frameRate(5);
  race = new Racer();
  env = new Environment();
}

function keyPressed() {
  if(keyCode === LEFT_ARROW) {
    race.setDir(-1, 0);
  } else if (keyCode === RIGHT_ARROW) {
  	race.setDir(1, 0);
  } else if (keyCode === DOWN_ARROW) {
  	race.setDir(0, 1);
  } else if (keyCode === UP_ARROW) {
  	race.setDir(0, -1);
  } else {
    race.setDir(0, 0);
  }

}

function draw() {
  scale(rez);
  background(220);
  
  env.update();
  env.show();
  
  race.update();
  race.show();
  
  
  if (env.endGame(race.gamePos())) {
  	print("END GAME");
    background(255, 0, 0);
    noLoop();
  }
  
  env.addObstacle();
  
}

