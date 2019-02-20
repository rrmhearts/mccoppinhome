let snake;
let rez = 20;
let food;
let w;
let h;
let dir;

function setup() {
  createCanvas(500, 500);
  w = floor(width / rez); // width in blocks
  h = floor(height / rez); // height in blocks
  frameRate(5);
  snake = new Snake();
  foodLocation();
}

function foodLocation() {
  let x = floor(random(w));
  let y = floor(random(h));
  food = createVector(x, y);
  
}

function keyPressed() {
  if(keyCode === LEFT_ARROW && 
		 	       (dir != RIGHT_ARROW || snake.length() == 1)) {
		dir = keyCode;
    snake.setDir(-1, 0);
  } else if (keyCode === RIGHT_ARROW && 
						 (dir != LEFT_ARROW || snake.length() == 1)) {
		dir = keyCode;
  	snake.setDir(1, 0);
  } else if (keyCode === DOWN_ARROW && 
						 (dir != UP_ARROW || snake.length() == 1)) {
		dir = keyCode;
  	snake.setDir(0, 1);
  } else if (keyCode === UP_ARROW && 
						 (dir != DOWN_ARROW || snake.length() == 1)) {
		dir = keyCode;
  	snake.setDir(0, -1);
  } else if (key === ' ') {
  	snake.grow();
  }

}

function draw() {
  scale(rez);
  background(220);
  if (snake.eat(food)) {
     foodLocation();
  } else if (random (1) < 0.001)
	{
		foodLocation();
		console.log(random(1));
	}
	snake.update();
  snake.show();
  
  if (snake.endGame()) {
  	print("END GAME");
    background(255, 0, 0);
    noLoop();
  }
  
  noStroke();
  fill(255, 0, 0);
  rect(food.x, food.y, 1, 1);
}

