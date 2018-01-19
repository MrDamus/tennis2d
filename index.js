const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

canvas.width = 1000;
canvas.height = 500;

const cw = canvas.width;
const ch = canvas.height;

const ballSize = 20; 
let ballX = cw / 2 - ballSize / 2;
let ballY = ch / 2 - ballSize / 2;

const paddleHeight = 100;
const paddleWidth = 20;

const playerX = 70;
const aiX = 910;

let playerY = 200;
let aiY = 200;

const lineWidth = 6;
const lineHeight = 16;

let ballSpeedX = 5;
let ballSpeedY = 5;

function player() {
  ctx.fillStyle = '#8abb00';
  ctx.fillRect(playerX, playerY, paddleWidth, paddleHeight);  
}

function ai() {
  ctx.fillStyle = '#ff1111';
  ctx.fillRect(aiX, aiY, paddleWidth, paddleHeight);  
}


function ball() {
  ctx.fillStyle = '#fff';
  ctx.fillRect(ballX, ballY, ballSize, ballSize);

  ballX += ballSpeedX;
  ballY += ballSpeedY;

  if (ballY <= 0 || ballY + ballSize >= ch) {
    ballSpeedY = -ballSpeedY;
    speedUp();
  }

  if (ballX <= 0 || ballX + ballSize >= cw) {
    ballSpeedX = -ballSpeedX;
    speedUp();
  }

}

function table() {
  // table
  ctx.fillStyle = 'black';
  ctx.fillRect(0,0, cw, ch);
  //lines in the middle
  ctx. fillStyle = 'white';

  for (let linePosition = 20; linePosition < ch; 
    linePosition+=30) {
      ctx.fillStyle = 'gray';
      ctx.fillRect(cw/2-lineWidth/2,
         linePosition, lineWidth, lineHeight)
    }
}



function playerPositon(e){
  //console.log('pozycja myszy to: ' + 
  //(e.clientY - topCanvas));
  playerY = (e.offsetY) - paddleHeight/2;

  if (playerY >= ch - paddleHeight) {
    playerY = ch - paddleHeight;
  }

  if (playerY <= 0) {
    playerY = 0;
  }
}

function speedUp() {
  //console.log(ballSpeedX + "," + ballSpeedY)
  //speed x
  if (ballSpeedX > 0 && ballSpeedX < 20) {
    ballSpeedX += .4;
  } else if (ballSpeedX < 0 && ballSpeedX > -20) {
    ballSpeedX -= .4;
  }
  //speed y 
  if (ballSpeedY > 0 && ballSpeedY < 20) {
    ballSpeedY += .3;
  } else if (ballSpeedY < 0 && ballSpeedY > -20) {
    ballSpeedY -= .3;
  }
}

function  aiPosition(){
  const aiMidPaddle = aiY + paddleHeight / 2;
  const midBall = ballY + ballSize / 2;

  if (ballX > 500) {
    if (aiMidPaddle - midBall > 200) {
      //console.log(">+200")
      aiY -= 25;
    } else if (aiMidPaddle - midBall > 50) {
      //console.log("+50 -50")
      aiY -= 10;
    } else if (aiMidPaddle - midBall < -200) {
      //console.log("<-200")
      aiY += 25;
    } else if (aiMidPaddle - midBall < -50) {
      //console.log("-50-(-200)")
      aiY +=10;
    } 
  }

  else if (ballX <= 500 && ballX > 150) {
      if (aiMidPaddle - midBall > 100) {
        aiY -= 5;
      } else if (aiMidPaddle - midBall < -100) {
        aiY += 5;
      }
  }
}


canvas.addEventListener("mousemove", playerPositon)



function game() {
  table();
  ball();
  player();
  ai();
  aiPosition();
}

setInterval(game, 1000/60)