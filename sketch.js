var sleep;
var astronout;

function preload (){
  bg=loadImage("images/iss.png");
sleep=loadImage("images/sleep.png");

}

function setup() {
  createCanvas(400,400);
 
  astronout = createSprite(300,230);
  astronout.addAnimation("sleeping",sleep);
  astronout.scale=0.1;
 } 


function draw() {
 

  background(bg);
  drawSprites();  
 
 
}