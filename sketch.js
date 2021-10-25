
var player,playerImg;
var Bullet,bulletImg;
var enemy,enemyImg;
var invisible;
var bgImg,bg;
var Inb;
var enemyGroup,bulletGroup;
var score=0;
var live=3


function preload(){

playerImg=loadAnimation("1.png","2.png","3.png","4.png","5.png","6.png");
eimg=loadImage("e3.png");
bulletImg=loadImage("b.png");
bgImg=loadImage("bg1.png");
bImg=loadImage("b.png")

}

function setup() {

  var canvas= createCanvas(1000,500);
  canvas.position(280,120)

  bg=createSprite(500,200,800,400)
  bg.addImage("bg",bgImg)
  bg.velocityX=-2;
  bg.scale=1.5;

  Bullet=createSprite(195,225)
  Bullet.addImage("b",bulletImg)
  Bullet.scale=0.2;

  player=createSprite(200,400)
  player.addAnimation("pImg",playerImg)
  player.scale=1;
  player.debug=false
  player.setCollider("rectangle",0,0,100,300)

  

  invisible=createSprite(400,450,700,20)
  invisible.visible=false;

  Inb=createSprite(1000,230,10,90)
  Inb.visible=false;

  enemyGroup=new Group();
  bulletGroup=new Group();

}

function draw() {

  background(0);

  player.collide(invisible);

  if(bg.x<0){
   bg.x=bg.width/2
  }

 if(keyDown("SPACE")){
   Bullet.velocityX=18;
  }

 

  if(Bullet.isTouching(enemyGroup)){
    enemyGroup.destroyEach();
    bulletGroup.destroyEach();
    Bullet.destroy()
    score=score+1;
  }

  if(player.isTouching(bulletGroup)){
    player.destroy()
    live=live-1
  }


  drawSprites();

  textSize(20)
  fill("black")
  text("PRESS SPACE TO FIRE",400,100)

  text("Score :"+score,900,80)
  text("Lives :"+live,900,120)

  spawnEnemy();

  }


function spawnEnemy(){

  if(frameCount % 150 === 0 ){

  var enemy=createSprite(1000,300)
  enemy.addImage("E",eimg)
  enemy.scale=0.5
  enemy.velocityX=-5

 var enemyBullet=createSprite(enemy.x,enemy.y)
 enemyBullet.addImage("b",bImg)
 enemyBullet.velocityX=-16
 enemyBullet.scale=0.3

  enemy.debug=false
  enemy.setCollider("rectangle",0,0,100,300)

  enemyGroup.add(enemy);
  bulletGroup.add(enemyBullet);

  }

}