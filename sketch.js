var fixedRect, movingRect;
var a,b

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  a = createSprite(300,100,40,50);
  a.shapeColor = "red";
  b = createSprite(300,300,40,50);
  b.shapeColor = "red";
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
  a.velocityY = +5;
  b.velocityY = -5;
}

function draw() {
  background(0,0,0);  

  bounceOff(a,b);

  drawSprites();
}
