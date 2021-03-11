
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies
const Body = Matter.Body;
var MarioSound,ThankYou;
var button,box;
var bg,play,play2,bg2,bg3,bg4,bg5,bg6;
var Like1,dislike1,neutral1,ground
var gameState = 0 ;
function preload()
{
play       = loadSound("Music/Music.mp3");
MarioSound = loadSound("Mario/Mario Sound.mp3");
play2      = loadSound("Music2/Music2.mp3");
Mario      = loadImage("images/Mario.png")
ThankYou   = loadSound("Music/Thank You last.mp3");
bg         = loadImage("images/cool-backgrounds.png");
bg2        = loadImage("images/images.png");
bg3        = loadImage("images/Hoop.png");
bg4        = loadImage("images/mariolvl2.png")
bg5        = loadImage("images/mariolvl3.png")
bg6        = loadImage("images/WhiteHatJr.png");
}

function setup() {
  createCanvas(900,600);
engine    = Engine.create();
world     = engine.world;
//Create the Bodies Here.

Engine.run(engine);
buttons   = new Buttons;
mario     = createSprite(200,355,1,1)
like1     = createSprite(300,350,1,1)
disike1   = createSprite(450,350,1,1)
neutral1  = createSprite(580,350,1,1)
ground    = createSprite(500,410,1000000,1)
//Play music in Starting
play.play();
 
}
function draw() {

  rectMode(CENTER);
mario.collide(ground);
 mario.collide(like1);
 //mario.collide(dislike1);
// mario.collide(neutral1);
if(gameState===0){ 
  mario.visible = false 
  background(bg);
buttons.display();
}
if(gameState===1){
  background(bg2);
mario.visible =true
}
if(gameState===1){
  mario.visible = false
  }
  if(gameState===1){
    ground.visible = false
    }
if(gameState===2){
  mario.visible =true
  }
  if(gameState===2){
    ground.visible=true
  }
  if(gameState===3){
    ground.visible=true
  }
  if(gameState===4){
    ground.visible=true
  }
  if(gameState===5){
    ground.visible=false
  }
  if(gameState===3){
    mario.visible =true
    }
    if(gameState===4){
      mario.visible =true
      }
if(gameState===2){
  mario.addImage(Mario)
  mario.scale = 0.13
  
}
if(gameState!==0){
  if(keyDown("A")){
    if(gameState===2){
      mario.x = mario.x-10
      keyPressed();
      background(bg3);
    }
    
  }
  if(keyDown("D")){
    if(gameState===2){
      mario.x = mario.x+10
      keyPressed();
      background(bg3)
    } 
      }
      
  if(gameState!==0){
    if(keyDown("A")){
      if(gameState===3){
        mario.x = mario.x-10
        keyPressed();
        background(bg4);
      }
      
    }
    if(keyDown("D")){
      if(gameState===3){
        mario.x = mario.x+10
        keyPressed();
        background(bg4)
      }
      
    }
    if(gameState!==0){
      if(keyDown("A")){
        if(gameState===4){
          mario.x = mario.x-10
          keyPressed();
          background(bg5);
        }
        
      }
      if(keyDown("D")){
        if(gameState===4){
          mario.x = mario.x+10
          keyPressed();
          background(bg5)
        }
        
      }
  if(gameState===5){
    mario.visible = false
    
  }
}

drawSprites();
}


 
}
}


 function keyPressed(){
  if(keyCode==32){
    mario.velocityY = -10
    mario.velocityY = mario.velocityY + 0.8
  } }

