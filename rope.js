class Rope {
    constructor(body1, body2, offsetX, offsetY) {
      
        var options = {
            bodyA: body1,
            bodyB: body2,
            pointB: { x: offsetX, y: offsetY }
        }
        this.offsetX = offsetX
        this.offsetY = offsetY
        //console.log(options);
        this.rope = Constraint.create(options)
        World.add(world, this.rope)
    }

    display() {
        var bobX= this.rope.bodyA.position.x;
        var bobY= this.rope.bodyA.position.y;
        var ropeX=this.rope.bodyB.position.x+this.offsetX
        var ropeY= this.rope.bodyB.position.y+this.offsetY

        strokeWeight(2);
        stroke("lightblue")
       
        line(bobX, bobY, ropeX,ropeY);
    }

}