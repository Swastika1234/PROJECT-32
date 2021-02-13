var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bg1,bg2;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
	bg1=loadImage("bg1.jpg")
	bg2=loadImage("bg2.jpg")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	
	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)
	packageSprite=createSprite(helicopterSprite.x,helicopterSprite.y, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2
	helicopterSprite.depth=packageSprite.depth
	helicopterSprite.depth+=1



	engine = Engine.create();
	world = engine.world;

	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

 	boxPosition=width/2-100
 	boxY=610;


 	boxleftSprite=createSprite(boxPosition-100, boxY, 10,100);
 	boxleftSprite.shapeColor=color(255,0,0);
	 boxleftSprite=createSprite(boxPosition+150, boxY, 10,100);
 	boxleftSprite.shapeColor=color(255,0,0);


 	boxLeftBody = Bodies.rectangle(boxPosition+20, boxY, 20,100 , {isStatic:true} );
 	World.add(world, boxLeftBody);

 	boxBase=createSprite(boxPosition-50, boxY+50, 200,10);
 	boxBase.shapeColor=color(255,0,0);
	 boxBase=createSprite(500, boxY+50, 200,10);
 	boxBase.shapeColor=color(255,0,0);

 	boxBottomBody = Bodies.rectangle(boxPosition+100, boxY+45-20, 200,20 , {isStatic:true} );
 	World.add(world, boxBottomBody);

 	boxleftSprite=createSprite(boxPosition+10 , boxY, 10,100);
 	boxleftSprite.shapeColor=color(255,0,0);
	 boxleftSprite=createSprite(560 , boxY, 10,100);
 	boxleftSprite.shapeColor=color(255,0,0);

 	boxRightBody = Bodies.rectangle(boxPosition+200-20 , boxY, 20,100 , {isStatic:true} );
 	World.add(world, boxRightBody);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(bg2);
 

  
  drawSprites();
  
  
 
}
function keyPressed() {
	//write code here
	if(keyCode===RIGHT_ARROW){
		helicopterSprite.x+=20
		packageSprite.x+=20
	}
	if(keyCode===LEFT_ARROW){
		helicopterSprite.x-=20
		packageSprite.x-=20
	}
	if(keyCode===DOWN_ARROW){
	packageSprite.velocityY=10
	}

}
