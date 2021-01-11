class Plinko{
    constructor(x,y,r){
        var options = {isStatic:true
        }

        this.r = r;
        
 this.body =  Bodies.circle(x,y,this.radius,options);
 World.add(world,this.body);
    }

display(){
    var pos = this.body.position;
    fill("white")
    ellipseMode(RADIUS)
    ellipse(pos.x,pos.y ,this.radius  )
}


}
    




