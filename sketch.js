const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var box1, ground;
var box2, box3, box4, box5, box6, box7, box8, box9, box10;
var box11, box12;
var box13;


function setup() {
  createCanvas(800,400);

  engine = Engine.create();
  world = engine.world;

  var options = {
    isStatic: true
  }

  ground = Bodies.rectangle(300,380,800,20,options);
  World.add(world,ground);
  box1 = new Box(170,200);
  box2 = new Box(210,200);
  box3 = new Box(250,200);
  box4 = new Box(290,200);
  box5 = new Box(330,200);
  box6 = new Box(370,200);

  box7 = new Box(210,150);
  box8 = new Box(250,150);
  box9 = new Box(290,150);
  box10 = new Box(330,150);

  box11 = new Box(250,100);
  box12= new Box(290,100);

  box13 = new Box(270,50);

  box1.shapeColor = color(0,255,0);
}

function draw() {
  background(0);  
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  rect(ground.position.x,ground.position.y,400,20);

  
}