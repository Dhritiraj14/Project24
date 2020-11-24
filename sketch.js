
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper1,bin1,bin2,bin3,ground;



function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	
	
	bin1 = new Bin(600,640,200,10)
	bin2 = new Bin(500,570,10,150)
	bin3 = new Bin(700,570,10,150);
	ground = new Ground(0,650,7000,10);
	paper1 = new Paper(20,50,30);

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  
  ground.display();
  paper1.display();
  fill("yellow");
  bin1.display();
  bin2.display();
  bin3.display();
  keyPressed();
  
 
}
function keyPressed(){
	if(keyCode===UP_ARROW ){
		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:3.5,y:-13})
	}
}


