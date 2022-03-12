var backgroundImage , backgroundsp;
var spaceshipImage , spaceship;
var cometImage , comet;


function preload() {
backgroundImage = loadImage("./Assets/Spacebackgroundnew.jpg");
spaceshipImage = loadImage("./Assets/spaceship.png");
cometImage = loadImage("./Assets/comet.png");
}

function setup() {
  canvas = createCanvas(windowWidth - 30 , windowHeight - 30);
  backgroundsp = createSprite( width/2 , height/2 );
  backgroundsp.addImage("space",backgroundImage);
  backgroundsp.velocityY = 2 ;


  spaceship = createSprite( width/2 , height - 100);
  spaceship.addImage("spaceship",spaceshipImage);
  spaceship.scale = 0.4 ;
  
  
}

function draw() {
  background(15,17,74);
  
  if(backgroundsp.y>height){
    backgroundsp.y = height/2
  }
  spawnComet();
  drawSprites();
  }

  
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
 
function spawnComet(){
  if(frameCount % 100 == 0 ){
    comet = createSprite( random( 50 , width-50) , 0 );
    comet.addImage("comet",cometImage);
    comet.velocityY = 3;
    comet.scale = 0.1;
  }
  
}