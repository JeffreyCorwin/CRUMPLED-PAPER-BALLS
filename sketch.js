const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine, world;
var ball;
var wall1;
var wall2;
var wall3;
var wall4;
var wall5;
var wall6;
var wall7;


function setup() {
	createCanvas(1000, 700);

	engine = Engine.create();
	world = engine.world;

	wall1 = new wall(650, 525, 10, 130);
	wall2 = new wall(800,525,10,130);
	wall3 = new wall(width/2,580,width,20);
	wall5 = new wall(width/2,0,width,80);
    wall4 = new wall(-20, 400, 80, 800);
	wall6 = new wall(1020,400,80,800);
	wall7 = new wall(-20,700,2000,80);

var balloptions ={
	isStatic:false,
	restitution:0.3,
	friction:0,
	density : 1.2
};

	//Create the Bodies Here.
    ball = Bodies.circle(130,200,20,balloptions);
	World.add(world,ball);
    
	rectMode(CENTER);
	ellipseMode(RADIUS);
}

function draw() {
  background(0);

 //if(ball.position.x > 670 && ball.position.x < 790 && ball.position.y > 525 && ball.position.y <= 520){
//	 ball.isStatic = true;
 //}

 ellipse(ball.position.x,ball.position.y,20);
  wall1.show();
  wall2.show();
  wall3.show();
  wall4.show();
  wall5.show();
  wall6.show();
  wall7.show();
  
  Engine.update(engine);

 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
	Matter.Body.applyForce(ball,{x:0,y:0},{x:50,y:-75});	
}
}