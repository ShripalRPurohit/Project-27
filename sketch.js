
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint

function preload()
{
	
}

function setup() {
	createCanvas(1200, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	  roof = new Roof(575,100,800,40)
    bob1 = new Bob(575,500,60)
    bob2 = new Bob(455,500,60)
    bob3 = new Bob(335,500,60)
    bob4 = new Bob(695,500,60)
    bob5 = new Bob(815,500,60)
    rope1 = new Rope(bob1.body,roof.body,0,0)
    rope2 = new Rope(bob2.body,roof.body,-120,0)
    rope3 = new Rope(bob3.body,roof.body,-240,0)
    rope4 = new Rope(bob4.body,roof.body,120,0)
    rope5 = new Rope(bob5.body,roof.body,240,0)

 	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("orange");
  
  roof.display();
  rope1.display()
  rope2.display()
  rope3.display()
  rope4.display()
  rope5.display()
  bob1.display();
  bob2.display()
  bob3.display()
  bob4.display()
  bob5.display()

}

function keyPressed(){
  if(keyCode===UP_ARROW){
	Matter.Body.applyForce(bob3.body,bob3.body.position,{x:-70,y:-65})
  }
}

