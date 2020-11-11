class Ball {
    constructor(x, y,r) {
      var options = {
          'restitution':0.5,
          'friction':0.3,
          isStatic:false
      }
      this.body = Bodies.circle(x, y, r,options);
      this.radius=r
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      ellipseMode(RADIUS);
      fill("green");
      strokeWeight(4)
      stroke("green")
      ellipse(pos.x, pos.y, this.radius, this.radius);
      pop();
    }
  };