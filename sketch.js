const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var box1,box2,box3,box4,box5,ground;
var bird,pig1,pig2,log1,log2,log3,log4;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    box3 = new Box(700,260,70,70);
    box4 = new Box(920,260,70,70);
    box5 = new Box(810,180,70,70);
    bird = new Bird(100,100,50,50);
    pig1 = new Pig(810,320);
    pig2 = new Pig(810,260);
    log1 = new Log(810,280,300,PI/2)
    log2 = new Log(810,220,300,PI/2)
    log3 = new Log(720,190,150,PI/7)
    log4 = new Log(840,190,150,PI/-7)
    ground = new Ground(600,380,1200,30);
}


function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    bird.display();
    pig1.display();
    pig2.display();
    log1.display();
    log2.display();
    log3.display();
    log4.display();
   ground.display();
}