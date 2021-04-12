var garden,rabbit;
var gardenImg,rabbitImg;
var iline;
var yc,yc_moving;
var rc,rc_moving;
var ap,ap_moving;
function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  yc_moving = loadImage("yl.png");
  rc_moving = loadImage("download (1).png");
  ap_moving = loadImage("apple-1.png");
  
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

  
  
 iline=createSprite(82,200,0.0000000000000001,400);
//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
 
}


function draw() {
  background(0);
  rabbit.collide(iline);
  console.log(rabbit.x)
  edges= createEdgeSprites();
  rabbit.collide(edges);
rabbit.x = World.mouseX;
 
  drawSprites();
spawnyc();
spawnrc();
  spawnap();
}
function spawnyc(){
if (frameCount%100===0){
  yc=createSprite(600,30,40,10);
 yc.velocityY=2;
 yc.addImage(yc_moving);
yc.scale=0.2;
yc.x = Math.round(random(50,350))

}
}
function spawnrc(){
if (frameCount%150===0){
  rc=createSprite(2000,30,40,10);
 rc.velocityY=2;
 rc.addImage(rc_moving);
rc.scale=0.1;
rc.x = Math.round(random(50,350))

}
}
function spawnap(){
if (frameCount%150===0){
  ap=createSprite(2000,30,40,10);
 ap.velocityY=2;
 ap.addImage(ap_moving);
ap.scale=0.1;
ap.x = Math.round(random(50,350))

}
}