class Snake {

	constructor() {
		this.body = [];
		this.body[0] = createVector(floor(w / 2), floor(h / 2));
		this.xdir = 0;
		this.ydir = 0;
		this.len = 0;
	}

	setDir(x, y) {
		this.xdir = x;
		this.ydir = y;
	}
	
	length() {
		return this.body.length;
	}

	update() {
		let head = this.body[this.body.length - 1].copy();
		this.body.shift();
		if (head.x > w - 1)
			head.x = 0;
		else if (head.x < 0)
			head.x = w - 1;
		else if (head.y > h - 1)
			head.y = 0;
		else if (head.y < 0)
			head.y = w - 1;
		else {
		  head.x += this.xdir;
		  head.y += this.ydir;
		}
		this.body.push(head);
	}

	grow() {
		let head = this.body[this.body.length - 1].copy();
		this.len++;
		this.body.push(head);
	}

	endGame() {
		let x = this.body[this.body.length - 1].x;
		let y = this.body[this.body.length - 1].y;

		for (let i = 0; i < this.body.length - 1; i++) {
			let part = this.body[i];
			if (part.x == x && part.y == y) {
				return true;
			}
		}
		return false;
	}

	eat(pos) {
		let x = this.body[this.body.length - 1].x;
		let y = this.body[this.body.length - 1].y;
		if (x == pos.x && y == pos.y) {
			this.grow();
			return true;
		}
		return false;
	}

	show() {
		for (let i = 0; i < this.body.length; i++) {
			fill(0);
			noStroke();
			rect(this.body[i].x, this.body[i].y, 1, 1)
		}
	}

}
