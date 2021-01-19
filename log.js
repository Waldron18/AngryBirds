class Log{
    constructor(x,y,height,angle){
        var options={
            restitution:0.5,
            friction:1,
            density:1
        }
        this.body=Bodies.rectangle(x,y,20,height,options)
        this.width=20;
        this.height=height;

        World.add(world,this.body)

        Body.setAngle(this.body,angle)
    }
    display(){
        push();
        rectMode(CENTER)
        translate(this.body.position.x,this.body.position.y)
        rotate(this.body.angle)
        rect(0,0,this.width,this.height)
        pop();
    }
}