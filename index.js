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

let ballSpeedX = 1;
let ballSpeedY = 1;

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
  }

  if (ballX <= 0 || ballX + ballSize >= cw) {
    ballSpeedX = -ballSpeedX;
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

function game() {
  table();
  ball();
  player();
  ai();

}

setInterval(game, 1000/60)