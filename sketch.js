var balloon,balloonImage1,balloonImage2;
var position
// create database and position variable here

function preload(){
  backgroundImage= loadImage("Hot Air Ballon-01.png")
  balloonImage= loadAnimation("Hot Air Ballon-02.png","Hot Air Ballon-03.png","Hot Air Ballon-04.png")
  balloonImage2= loadImage("Hot Air Ballon-02.png")
  }

//Function to set initial environment
function setup() {
  database=firebase.database();
  createCanvas(1500,700);

  balloon=createSprite(250,450,150,150);
  balloon.addAnimation("hotAirBalloon",balloonImage1);
  balloon.scale=0.5;

 var balloonPosition = database.ref('balloon/height');
 balloonPosition.on("value",readPositon,showError)
}

// function to display UI
function draw() {
  background(bg);

  if(keyDown(LEFT_ARROW)){
    balloon.addAnimation("hotAirBalloon",balloonImage2);
    writePosition(-1,0);
  }
  else if(keyDown(RIGHT_ARROW)){
    balloon.addAnimation("hotAirBalloon",balloonImage2);
    writePosition(1,0)
  }
  else if(keyDown(UP_ARROW)){
    balloon.addAnimation("hotAirBalloon",balloonImage2);
    writePositon(0,-1)
  }
  else if(keyDown(DOWN_ARROW)){
    balloon.addAnimation("hotAirBalloon",balloonImage2);
    writePosition(0,+1)
  }

  console.log(balloon2.x)
  console.log(balloon2.y)
  drawSprites();

  fill(0);
  stroke("white");
  textSize(25);
  text("**Use arrow keys to move Hot Air Balloon!",40,40);
}

function updateHeight(x,y){
  database.ref('balloon/position').set({
    'x': position.x + x,
    'y': position.y + y
  })
  }

  function readHeight(data){
    height = data.val();
    balloon.x = height.x
    balloon.y = height.y

  }


function showError(){
  console.log("Erron in writing Database")
}
