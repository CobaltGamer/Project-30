class BaseClass{
    constructor(x, y, width, height) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
       // this.image = loadImage("sprites/base.png");
        World.add(world, this.body);
        this.visibility = 250;
      }
      display(){
        var angle = this.body.angle;
        if (this.body.speed < 3 ) {
          push();
          translate(this.body.position.x, this.body.position.y);
          rotate(angle);
          rectMode(CENTER);
          fill("red")
          rect(0, 0, this.width, this.height);
          pop();
        }
        else { 
          World.remove(world,this.body);
          this.visibility = this.visibility - 5
        }
        
      }
}