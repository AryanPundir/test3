var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight =300;


const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground1
var div

function preload()
{
	
}

function setup() {
	createCanvas(480, 800);


	engine = Engine.create();
	world = engine.world;





	//Create the Bodies Here.
ground1  = new Ground(240,795,480,10)


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  console.log(divisions);

  for(var k =0; k<=width;k=k+80){
	divisions.push(new Division(k,height-divisionHeight/2,10,divisionHeight));
}

  ground1.display()
  
  drawSprites();
 
}



