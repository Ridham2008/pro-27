class Rope{    
 constructor(body1,body2){
var option = {
bodyA:body1,
bodyB:body2
//length:10,
//stiffness:0.04

}
this.rope=Constraint.create(option)
World.add(world, this.rope);
}
display(){

var pointA = this.rope.bodyA.position
var pointB = this.rope.bodyB.position
strokeWeight(4)
line(pointA.x,pointA.y,pointB.x,pointB.y)
}

}
