//Create variables here
var backImg, Jungle;
var monkeyImg1,monkeyImg2,monkeyImg3,monkeyImg4,monkeyImg5,monkeyImg6,monkeyImg7,monkeyImg8,monkeyImg9,monkeyImg10,monkey_01;
var bananaImg;
var gameOver, gameOverImg;
var gameState=0;
var database;
var form,player,game;
var playerCount;
function preload()
{
  //load images here
  backImg= loadImage("images/jungle.jpg");
  monkeyImg1= loadImage("images/monkey_01.png");
  monkeyImg2= loadImage("images/monkey_02.png");
  monkeyImg3= loadImage("images/monkey_03.png");
  monkeyImg4= loadImage("images/monkey_04.png");
  monkeyImg5= loadImage("images/monkey_05.png");
  monkeyImg6= loadImage("images/monkey_06.png");
  monkeyImg7= loadImage("images/monkey_07.png");
  monkeyImg8= loadImage("images/monkey_08.png");
  monkeyImg9= loadImage("images/monkey_09.png");
  monkeyImg10= loadImage("images/monkey_10.png");
}

function setup() {
	canvas = createCanvas(displayWidth - 20, displayHeight - 30);
  database=firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw() {  
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear(1);
    game.play();
  }
  drawSprites();
  //add styles here

}



