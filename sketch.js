
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof=new Roof(400,150,800,20)
	

	bob1=new Bob(250,500,35)
	bob2=new Bob(320,500,35)
	bob3=new Bob(390,500,35)
	bob4=new Bob(460,500,35)
	bob5=new Bob(530,500,35)

	rope1=new Rope(bob1.body,roof.body,-35*4,0)
	rope2=new Rope(bob2.body,roof.body,-35*2,0)
	rope3=new Rope(bob3.body,roof.body,-35*0,0)
	rope4=new Rope(bob4.body,roof.body,-35*-2,0)
	rope5=new Rope(bob5.body,roof.body,-35*-4,0)

	Engine.run(engine)
  
}


function draw() {
  
  background("white");
  
  
  roof.display()
  
  rope1.display()
  rope2.display()
  rope3.display()
  rope4.display()
  rope5.display()

  bob1.display()
  bob2.display()
  bob3.display()
  bob4.display()
  bob5.display()
}



function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(bob1.body,bob1.body.position,{x:850,y:-850})
	}
	if(keyCode === 50) {
		Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-1000,y:1000});
		Matter.Body.applyForce(bobt2.body,bob2.body.position,{x:-1000,y:1000});
	}
}