
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject	
var world;

var ground1;
var trash1;
var paper1;

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,670,width,700);
	dustbinObj=new dustbin(1200,650);

	Engine.run(engine);

	trash1 = new trash(700,320,50,50)
	paper1 = new paper(10,10)
	ground1 = new ground(600,height,1600,20);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
 

  groundObject.display();
  dustbinObj.display();
  trash1.display();
  paper1.display();
}

