class Paper {
    constructor(x, y, d) {
      var options = {

        'restitution':0.8,
        'friction':1.0,
        'density':1.0

      }
      this.x = x;
      this.y = y;
      this.d=d
      this.image = loadImage("paper.png"); 
      this.body = Bodies.circle(this.x, this.y, (this.d)/2, options);
       
      World.add(world, this.body);

      
    }
    display(){
      var pos = this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
     imageMode(CENTER);
      //strokeWeight(3);
      //stroke("blue");
      //fill("green");
      image(this.image,0, 0, this.d, this.d);
      pop();
    }
  };
  