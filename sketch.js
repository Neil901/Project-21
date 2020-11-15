var bullet, wall;
var speed,weight;
var thickness;
var deformation=0;


function setup() {
  createCanvas(800,400);
  thickness = random (22,83);
  wall=createSprite(700, 200, thickness, 200);
  bullet = createSprite (100,200,50,10);
  speed = random (55,90);
  weight = random (400,1500);
  bullet.shapeColor=color(255);
  wall.shapeColor=color(255);  
}

function draw() {
  background(255,255,255); 
  background("black");
  wall.shapeColor=color(255);  
  bullet.velocityX = speed;
  if (wall.x-bullet.x < (bullet.width+thickness)/2)
{
bullet.velocityX = 0;
deformation=0
deformation =thickness;

}
if (deformation>50);
{wall.shapeColor=color ("red")
}
if (deformation<51);
{wall.shapeColor=color ("green")
}
console.log (deformation);

drawSprites();
}