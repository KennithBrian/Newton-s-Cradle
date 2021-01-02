class Rope{
    constructor(bodyA,bodyB,offsetX,offsetY){
        this.offsetX = offsetX;
        this.offsetY = offsetY;
        var options={
            bodyA: bodyA,
            bodyB: bodyB,
            pointB: {x: this.offsetX,y: this.offsetY},
            //stiffness: 0.04,
            length: 400
        }
        this.rope = Constraint.create(options);
        World.add(world,this.rope);
    }
    display(ofsetX){
        var pointA = this.rope.bodyA.position;
        var pointB = this.rope.bodyB.position;

        strokeWeight(4);
        line(pointA.x,pointA.y,pointB.x+ofsetX,pointB.y);
    }
}