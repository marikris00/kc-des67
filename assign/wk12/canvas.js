
var canvas = document.getElementById("Game");
var ctx = canvas.getContext("2d");

var ballX = canvas.width/2;
var ballY = canvas.height/2;
var ballColor = 'black';
var ballRadius = 50;

var speedX = 5;
var speedY = 3;

var directionDown = true;
var directionRight = true;

var clicks = 0;

function animate(){
  ctx.fillStyle = 'rgba(255, 255, 255, 0.3)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.beginPath();
  ctx.fillStyle = ballColor;
  ctx.strokeStyle = 'black';
  ctx.arc(ballX, ballY, ballRadius, 0, 2*Math.PI);
  ctx.fill();
  ctx.stroke();
  ctx.closePath();

  ctx.fillText ("Score: " + clicks, 150, 590);

  if(ballX + ballRadius >= canvas.width || ballX - ballRadius <= 0 ) {
      directionRight = !directionRight;
  }

  if(directionRight){
      ballX = ballX + speedX;
  }
  else {
      ballX = ballX - speedX;
  }


  if(ballY + ballRadius >= canvas.height || ballY - ballRadius <= 0) {
      directionDown = !directionDown;
  }
  if(directionDown){
      ballY = ballY + speedY;
  }
  else {
      ballY = ballY - speedY;
  }

  window.requestAnimationFrame(animate);
}

animate();

canvas.addEventListener("click", function(event){

  var distX = Math.abs(ballX - event.clientX);
  var distY = Math.abs(ballY - event.clientY);
  var fillStyle = ballColor;

  if(distX < ballRadius && distY < ballRadius){
      console.log('FIRE!!!!!!')
      clicks = clicks+1;
  }

  if (fillStyle = "ballColor") {
    ballColor = "blue"
  }
  else if (fillStyle = "blue") {
    ballColor = "black";
  }

})
