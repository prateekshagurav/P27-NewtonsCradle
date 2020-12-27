class Bob{
    constructor(x,y,r){
        var options = {
            isStatic: false,
            restitution : 1, //to give momentum effect
            friction : 0,
            density : 1
        }
        this.body = Bodies.circle(x,y,r,options);
        this.d = r*2;
        World.add(world,this.body);
        
    }
    display(){
        var pos = this.body.position
        ellipse(pos.x,pos.y,this.d,this.d);


    }
}