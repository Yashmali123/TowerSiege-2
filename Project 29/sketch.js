const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine,world;
var ground1,ground2;
var block1,block2,block3,block4,block5,block6,block7;
var block8,block9,block10,block11,block12;
var block13,block14,block15;
var block16;

var block17,block18,block19,block20,block21;
var block22,block23,block24,block25;

var ball1,slingshot1;


function setup() {
  createCanvas(1200,550);
  engine = Engine.create();
  world = engine.world;

ground1=new Ground(500,490,400,20);
ground2=new Ground(950,220,330,20);
//bottom Layer
block1=new Box(350,460,50,50);
block2=new Box(400,460,50,50);
block3=new Box(450,460,50,50);
block4=new Box(500,460,50,50);
block5=new Box(550,460,50,50)
block6=new Box(600,460,50,50)
block7=new Box(650,460,50,50)
//middle layer
fill("pink")
block8=new Box(400,410,50,50)
block9=new Box(450,410,50,50)
block10=new Box(500,410,50,50)
block11=new Box(550,410,50,50)
block12=new Box(600,410,50,50)
//layer
block13=new Box(450,360,50,50)
block14=new Box(500,360,50,50)
block15=new Box(550,360,50,50)
//top
block16=new Box(500,310,50,50)

//second
//bottom
block17=new Box(850,185,50,50)
block18=new Box(900,185,50,50);
block19=new Box(950,185,50,50);
block20=new Box(1000,185,50,50);
block21=new Box(1050,185,50,50);
//middle
block22=new Box(900,135,50,50)
block23=new Box(950,135,50,50)
block24=new Box(1000,135,50,50)

block25=new Box(950,85,50,50)
ball1=new Ball(120,330,80)
slingshot1=new Slingshot(ball1.body,{x:120,y:330})

}

function draw() {
  background(85,90,90);  
  Engine.update(engine);
  ball1.display();
  slingshot1.display();
  ground1.display();
  ground2.display();
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();
  block22.display();
  block23.display();
  block24.display();
  block25.display();
  drawSprites();
}



function mouseDragged(){
  Matter.Body.setPosition(ball1.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
  slingshot1.fly();
}

function keyPressed(){
  if(keyCode===32){
  slingshot1.respawn(ball1.body);
  }
  }