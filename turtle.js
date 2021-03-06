class Turtle {
	constructor(x, y, angle, icon) {
		this.x = x;
		this.y = y;
		this.heading = angle;
		this.show = true;
		this.icon = icon;
	}
	
	reset() {
		console.log(this.x, this.y, this.heading);
		translate(this.x, this.y);
		rotate(this.heading);
		this.pen = DOWN;
		this.show = true;
	}

	move(amt) {
		if (this.pen) {
			if(this.pen == DOWN)
				stroke(instance.pencolor);
			else if(this.pen == ERASE)
				stroke(instance.background);
			strokeWeight(2);
			line(0, 0, amt, 0);
		}
		translate(amt, 0);
	}

	turn(angle) {
		rotate(angle);
	}

	setDirection(angle) {
		this.heading = angle;
	}

	setPos(x, y) {
		this.x = x;
		this.y = y;
	}

	display() {
		if(!this.show)
			return;
		const size = 50;
		push();
		rotate(90);
		imageMode(CENTER);
		image(this.icon, this.x, this.y-size/2, size, size);
		pop();
	}
}