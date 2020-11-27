var invisibleGround;
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var bananaGroup, obstacleGroup;
var score
var PLAY = 1;
var END = 0;
var gameState = PLAY;
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {

monkey=createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1;
  
  ground=createSprite(400,350,900,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
   
  invisibleGround = createSprite(400,350,900,10);
   
  invisibleGround = createSprite(400,350,900,10);
  invisibleGround.visible = false;
  bananaGroup = createGroup();
  obstacleGroup = createGroup();
 survivaleTime=0;

}


function draw() {
background("lightblue");
      if (ground.x < 0){
      ground.x = ground.width/2;
    }
     monkey.velocityY = monkey.velocityY + 0.8
  monkey.collide(invisibleGround);
      if(keyDown("space")&& monkey.y >= 300) {
        monkey.velocityY = -18;
         
    }
  
    if(obstacleGroup.isTouching(monkey)){
      
        gameState = END;
    }
  if (gameState === END) {

    ground.velocityX = 0;
    monkey.velocityY = 0;
    obstacleGroup.setVelocityXEach(0);
    bananaGroup.setVelocityXEach(0);
    obstacleGroup.setLifetimeEach(-1);
    bananaGroup.setLifetimeEach(-1);
  }
  food();
  obstacle();
  if (gameState=== PLAY){
    
  
  stroke("white");
  textSize(20);
  fill("white");
  text("Score" + score, 500,50);
  
   stroke("black");
  textSize(20);
  fill("black");
  survivaleTime=Math.ceil(frameCount/frameRate())
   text("Survivale Time " + survivaleTime, 100,50);
  }
  drawSprites();
}
function food(){
  if (frameCount % 80 === 0){
    banana=createSprite(600,400,20,20);
    banana.y=Math.round(random(120,200));
    banana.addImage(bananaImage);
    banana.scale=0.1
    banana.velocityX=-3;
bananaGroup.add(banana);
  }

}
function obstacle(){
  if (frameCount % 300 === 0){
    obstacles = createSprite(600,325,20,20);
    obstacles.addImage(obstacleImage);
    obstacles.velocityX=-6;
    obstacleGroup.add(obstacles);
    obstacles.scale=0.15;
  }
}




