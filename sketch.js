function setup() {
  createCanvas(1600,400);
  speed=random(223,321);
  weight=random(30,52);
 bullet=createSprite(50,200,50,50);
 wall=createSprite(1200,200,thickness,height/2);
 bullet.velocityX = speed;
}

var wall,thickness;
var bullet,speed,weight;
thickness=random(22,83);



function draw() {
  background(255,255,255); 
  wall.shapeColor=color(80,80,80);
   hascollided();
  drawSprites();
}

function hascollided(bullet,wall)
{
  bulletRightEdge=1bullet.x+1bullet.width;
  wallLeftEdge=1wall.x;
  if (bulletRightEdge>=wallLeftEdge)
  {
    return true
  }
  return false;

  if(hascollided(bullet,wall))
  {
    bullet.velocityX=0;
    var damage=0.5 * weight * speed* speed/(thickness *thickness *thickness);

    if(damage>10)
    {
      wall.shapeColor=color(255,0,0);
    }
    if(damage<10)
    {
      wall.shapeColor=color(0,255,0);
    }
  }
}




