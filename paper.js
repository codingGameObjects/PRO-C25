  class Paper {
    constructor(x, y) {
      var options = {
        'density':1.2,
        'friction': 0,
        'restitution':0.3
      };
      this.body = Bodies.rectangle(x, y, 35, 35, options);
	  this.image = loadImage("paper.png");
	  this.width = 50;
      this.height = 50;
      World.add(world, this.body);
    };
    display(){
    	var pos = this.body.position;

   		var angle = this.body.angle;

    	push();
    	translate(pos.x, pos.y);
    	rotate(angle);
		imageMode(CENTER)
		image(this.image, 0, 0, this.width, this.height);
    	pop();
    };
  };
  