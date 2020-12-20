
var bullet1,bullet2,bullet3,bullet4;
var wall1,wall2,wall3,wall4;
var border1,border2,border3;




function setup() {
  createCanvas(800,400);

  border1=createSprite(250,100,700,9);
  border2=createSprite(250,200,700,9);
  border3=createSprite(250,300,700,9);

  wall1=createSprite(450,50,9,50);
  wall2=createSprite(450,150,9,50);
  wall3=createSprite(450,250,9,50);
  wall4=createSprite(450,350,9,50);

  bullet1=createSprite(435,50,20,20);
  bullet1.velocityX=-3;
  bullet2=createSprite(435,150,20,20);
  bullet2.velocityX=-4;
  bullet3=createSprite(435,250,20,20);
  bullet3.velocityX=-5;
  bullet4=createSprite(435,350,20,20);
  bullet4.velocityX=-6;
}



function draw() {
  background("black"); 

  if(bullet1.x<15){
    bullet1.velocityX=3;
  }
  if(bullet1.x>443){
    bullet1.velocityX=0;
    bullet1.shapeColor=("red");
  }

  if(bullet2.x<15){
    bullet2.velocityX=4;
  }
  if(bullet2.x>443){
    bullet2.velocityX=0;
    bullet2.shapeColor=("yellow");
  }

  if(bullet3.x<15){
    bullet3.velocityX=4;
  }
  if(bullet3.x>443){
    bullet3.velocityX=0;
    bullet3.shapeColor=("green");
  }

  if(bullet4.x<15){
    bullet4.velocityX=5;
  }
  if(bullet4.x>443){
    bullet4.velocityX=0;
    bullet4.shapeColor=("blue");
  }




  
  drawSprites();
}