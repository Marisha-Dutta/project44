var bg;

function preload() {
  bg = loadImage("background.jpg");
  manImg = loadImage("fisshermaan.png");
}



function setup() {
  createCanvas(800,400);
  man = createSprite(150,100,200,100);
  man.addImage(manImg);
}

function draw() {
  background(bg); 
  
  spawnFishes();
  
  drawSprites();
}

function spawnFishes(){
  if(frameCount%100===0){
fish = createSprite(800,random(200,350));
fish.velocityX = -5;
  }
}