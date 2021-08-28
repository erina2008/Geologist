class Iron{
	constructor(x,y){
		var options = {
		restitution:0.8,
		friction:3,
		density:30
		};
	
        this.body = Bodies.rectangle(x, y, 50, 50, options);
		this.width = x;
		this.height = y;
		World.add(world, this.body);

	}
	display()
	{
			var ironpos=this.body.position;		
			push()
			translate(ironpos.x, ironpos.y);
			rectMode(CENTER)
			strokeWeight(5);
			stroke("red");
			fill("green");
			rectMode(CENTER)
            rect(0, 0, this.width, this.height);
            pop();
	}

}