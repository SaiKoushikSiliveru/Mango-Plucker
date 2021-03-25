
class Sling{
    constructor(body1, body2,offsetX,offsetY){
        this.offsetX=offsetX
        this.offsetY=offsetY
        var options = {
            bodyA: body1,
            bodyB: body2,
            pointB:{x:this.offsetX,y:this.offsetY},
            stiffness: 0.004,
            length: 10
        }
        this.rope = Constraint.create(options);
        World.add(world, this.rope);
        
    }

    display(){
        if(this.rope.bodyA){
        var pointA = this.rope.bodyA.position;
        var pointB = this.rope.bodyB.position;

        push()
        strokeWeight(2)
            stroke("white")
            var Anchor1X=pointA.x
            var Anchor1Y=pointA.y

            var Anchor2X=pointB.x+this.offsetX
            var Anchor2Y=pointB.y+this.offsetY

            line(Anchor1X, Anchor1Y, Anchor2X, Anchor2Y);
        pop()}}
    

    
        release (){
            this.rope.bodyA=null
        }
        attach(body){
            
            this.rope.bodyA=body
                }
}
