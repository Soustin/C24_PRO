const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
  createCanvas(1500, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    paper = new Paper(100, 320, 50);
    box = new Box(1200, 555);
    //box2 = new Box(300, 265);
    //box3 = new Box(272.5, 280);
    ground = new Ground(750, 575, width, 10);

	Engine.run(engine);
  
}


function draw() {
  background(0);
  Engine.update(engine);
  rectMode(CENTER);

  paper.display();
  box.display();
  //box2.display();
  //box3.display();
  ground.display();

  if(paper.x.position > 200){
    paper.y.position += 25000;
  }
  
  drawSprites();
  keyPressed();
 
}

function keyPressed() {
  if(keyCode === UP_ARROW){

    Matter.Body.applyForce(paper.body, paper.body.position, {x: 4, y: -11});

  }
}