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


function ball(){
  ctx.fillStyle = '#fff';
  ctx.fillRect(ballX, ballY, ballSize, ballSize);  
}

function table() {
  // table
  ctx.fillStyle = 'black';
  ctx.fillRect(0,0, cw, ch);
  //lines in the middle
  ctx. fillStyle = 'white';

}
table();
ball();
