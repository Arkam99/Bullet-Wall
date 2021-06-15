var bullet ,wall;
var speed,weight;

function setup() {
  createCanvas(1600,400);

  speed=random(223,321);
  weight=random(30,52);

  thickness=random(22,83);

  bullet=createSprite(50,200,50,5);
  bullet.velocityX = speed;
  bullet .shapeColor=color(255);

  wall=createSprite(1100,200,40,height/2);
  wall.shapeColor=color(80,80,80);

}

function draw() {
  background(0);  
 
if(Collided(bullet,wall))
{
  bullet.velocityX = 0;
  var damage=0.5* weight * speed * speed /(thickness * thickness * thickness);
    if(damage>10)
       {
     wall.shapeColor=("red");
       }
   if(damage<10)
       {
     wall.shapeColor=("green");
       }
 }
 drawSprites();
 
}

function Collided(lbullet,lwall){
 
 var bulletRightEdge=lbullet.x;
 var wallLeftEdge=lwall.x;
  if(bulletRightEdge>=wallLeftEdge)
       {
   return true;
       }
   return false;

}

