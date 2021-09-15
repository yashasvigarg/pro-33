const Engine = Matter.Engine;
 const World = Matter.World;
 const Events = Matter.Events;
 const Bodies = Matter.Bodies;
 const Body = Matter.Body;

 var engine,world;
var ice=[];

function preload(){

winterI=loadImage("winter.jpg")
santaI = loadAnimation("sgif.png","sgift.png")
flakeI = loadImage("flake.png")
}
function setup() {
  createCanvas(800,400);

  engine = Engine.create();
    world = engine.world;
    
  santa =createSprite(100, 300, 20, 20);
  santa.addAnimation("walking",santaI)
  santa.scale = 0.9;

    for (var o = 10; o <=width ; o=o+400) 
  {
    ice.push(new Ice(o,40));
    
  }
    
}


function draw() {
  background(winterI);
  Engine.update(engine);
  if(keyDown("left_arrow")){
    santa.x= santa.x-2;
  }
  if(keyDown("right_arrow")){
    santa.x= santa.x+2;
  }
  for (var o = 0; o < ice.length; o++){
    ice[o].display();
   
  }
  if(frameCount % 20===0){
    ice.push(new Ice(random(100,900),10,10))
  
    }

   
  drawSprites();
}