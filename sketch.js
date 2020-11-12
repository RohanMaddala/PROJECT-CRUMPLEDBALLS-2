
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bin,binImage;

function preload(){
	binImage = loadImage("bin.png")
}

function setup() {
	createCanvas(1520, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.//75,675
	papper = new Papper()
	
	ground = new Ground(width/2,680,width,10)

	wall1= new wall(600+720, 665, 200,20);

	wall2= new wall(1420, 600, 20,150);

	wall3= new wall(1220, 600, 20,150);

	bin = createSprite(600+720,560,50,50)
	bin.addImage("bin",binImage)
	bin.scale=0.7	


 	Engine.run(engine)
  
}


function draw() {

  Engine.update(engine)	
  rectMode(CENTER);
  background("white");
   
  console.log(papper.y)
  console.log(papper.x)

  papper.display();
  ground.display();
  /*wall1.display();
  wall2.display();
  wall3.display();*/
  //keyPressed();	

  drawSprites();
}

function keyPressed(){
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(papper.body,papper.body.position,{x:100,y:-100});
	}
}