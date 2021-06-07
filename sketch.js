
var bg_img;

var score=0;




var singleImg,coupleImg,tripleImg,boundaryImg,sixerImg;

var runs;
var single,couple,triple,four,sixer,wicket;
var bat,batImg;
var outImg;
var bowler,bowlerImg,gameOver,gameOverImg,restart,restartImg;
function preload() {
  bat1Img =loadImage("ourBat1.png");
bowlerImg =loadImage("tennis ball.png");
  bg_img =loadImage("stadium.jpg");
  singleImg =loadImage("1.png");
  coupleImg =loadImage("2.png");
 tripleImg =loadImage("3.png");
  boundaryImg =loadImage("four.jpg");
  sixerImg =loadImage('six.png');
  outImg =loadImage("out.png'.png");
gameOverImg =loadImage("gameover.png");

}



function setup() {
  createCanvas(980,430);
 bat =createSprite(100,200,20,20);
 bat.addImage(bat1Img);
 bat.scale=0.75;

 bowler =createSprite(920,200,20,20);
 bowler.addImage(bowlerImg);
 bowler.scale=0.1;

 gameOver=createSprite(200,200,20,20);
gameOver.addImage(gameOverImg);
gameOver.scale=0.5;
gameOver.visible=false;



 if(frameCount%80 === 0) {
wicket =createSprite(20,Math.round(random(0,980),Math.round(random(0,430))));
wicket.velocityX=2;
wicket.addImage(outImg);
wicket.scale=0.05;
 }
 if(frameCount%70 === 0) {
single =createSprite(70,Math.round(random(0,980),Math.round(random(0,430))));
single.velocityX=-2;
single.addImage(singleImg);
single.scale=0.25;
 }
 if(frameCount%95 === 0) {
couple =createSprite(100,Math.round(random(0,980),Math.round(random(0,430))));
couple.velocityX=2.5;
couple.addImage(coupleImg);
couple.scale=0.5;
 }
 if(frameCount%67 === 0) {
triple =createSprite(80,Math.round(random(0,980),Math.round(random(0,430))));
triple.velocityX=-1.5;
triple.addImage(tripleImg);
triple.scale=0.25;
 }
 if(frameCount%85 === 0) {
four =createSprite(60,Math.round(random(0,980),Math.round(random(0,430))));
four.velocityX =1;
four.addImage(boundaryImg);
four.scale=0.35;
 }
 if(frameCount%55 == 0) {
sixer =createSprite(72,Math.round(random(0,980),Math.round(random(0,430))));
sixer.velocityX =-1.5;
sixer.addImage(sixerImg);
sixer.scale=0.45;
 }
}

function draw() {
  background(bg_img);  
  text("score:"+score,60,60);
  
  bat.y =mouseY;
  bat.x=mouseX;

  if(bat.isTouching(single)){
    score=score+1;
    single.destroy();
  }
  if(bat.isTouching(couple)) {
score=score+2;
couple.destroy();
  }
  if(bat.isTouching(triple)) {
score=score+3;
triple.destroy();
  }
  if(bat.isTouching(four)) {
score=score+4;
four.destroy();
  }
  if(bat.isTouching(sixer)) {
    score=score+6;
    sixer.destroy();
  }
  if(bat.isTouching(wicket)) {
score=score+0;
wicket.destroy();
single.destroy();
couple.destroy();
triple.destroy();
four.destroy();
sixer.destroy();
gameOver.visible=true;
  }
  

  drawSprites();
}

function reset() {

}