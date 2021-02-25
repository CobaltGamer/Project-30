const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var polygon;
function setup() {


    engine = Engine.create();
  world = engine.world;

    var canvas = createCanvas(1200,400)
    var myEngine, myWorld;
    ground = new Ground(600,height,1200,20)
    ground2 = new Ground(700,280,200,20)
    ground3 = new Ground(983,207,150,20)

// level 1 blocks
    block1 = new BaseClass(721,260,40,30)
    block2 = new BaseClass(761,260,40,30)
    block3 = new BaseClass(681,260,40,30)
    block4 = new BaseClass(641,260,40,30)
    block5 = new BaseClass(748,212,40,30)
    block6 = new BaseClass(708,212,40,30)
    block7 = new BaseClass(668,212,40,30)
    block8 = new BaseClass(729,181,40,30)
    block9 = new BaseClass(689,181,40,30)
    block10 = new BaseClass(710,148,40,30)

// level 2 blocks
    block11 = new BaseClass(943,175,40,30)
    block12 = new BaseClass(983,175,40,30)
    block13 = new BaseClass(1023,175,40,30)
    block14 = new BaseClass(960,145,40,30)
    block15 = new BaseClass(1000,145,40,30)
    block16 = new BaseClass(980,110,40,30)

    polygon = Bodies.circle(50,200,20)
    World.add(world, polygon);

    slingshot = new SlingShot(this.polygon,{x:100, y:200});

}

function draw() {
    background("lightGreen")
    textSize(20)
    text("Press space to try again", 100 ,50)
    
    text(mouseX + "," + mouseY,mouseX,mouseY)
    Engine.update(engine)

    ground.display()
    ground2.display()
    ground3.display()

    block1.display()
    block2.display()
    block3.display()
    block4.display()
    block5.display()
    block6.display()
    block7.display()
    block8.display()
    block9.display()
    block10.display()

    block11.display()
    block12.display()
    block13.display()
    block14.display()
    block15.display()
    block16.display()


    //imageMode(CENTER);
   // image(polygon_img, polygon.position.x, polygon.position.y, 40,40);
    circle(polygon.position.x, polygon.position.y,40)
    slingshot.display();

    
}

function mouseDragged() {
    Matter.Body.setPosition(this.polygon, {x:mouseX, y:mouseY})
}

function mouseReleased() {
    slingshot.fly()
}
function keyPressed() {
    if(keyCode === 32){
        slingshot.attach(this.polygon);
    }
}