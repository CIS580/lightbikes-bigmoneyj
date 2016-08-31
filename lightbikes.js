var canvas = document.getElementById('screen');
var ctx = canvas.getContext('2d');//context
// var backCanvas = new Canvas(canvas.width, canvas.height);
// var backCtx = backCanvas.getContext('2d');


var speed = 2/16/10;

var x = 0;
var y = 0;
var image = new Image();
image.src = ".../Users/Keith Johnson/Pictures/blah";

var input = {
  up: false,
  down: false,
  left: false,
  right: false
}

window.onkeydown = function(event) {
  //up/w 38,87
  //left/a 37, 65
  //right/d 39, 68
  //down/s 40, 83
  event.preventDefault();
  switch(event.keyCode) {
    case 38:
    case 87:
      input.up = true;
      break;

    case 37:
    case 65:
      input.left = true;
      break;

    case 39:
    case 68:
      input.right = true;
      break;

    case 40:
    case 63:
      input.down = true;
      break;
  }
}

window.onkeyup = function(event) {
  //up/w 38,87
  //left/a 37, 65
  //right/d 39, 68
  //down/s 40, 83
  event.preventDefault();

  switch(event.keyCode) {
    case 38:
    case 87:
      input.up = false;
      break;

    case 37:
    case 65:
      input.left = false;
      break;

    case 39:
    case 68:
      input.right = false;
      break;

    case 40:
    case 83:
      input.down = false;
      break;
  }
}

function loop(timestamp) {
  if(input.up) y-=1;
  else if(input.down) y+=1;
  else if(input.left) x-=1;
  else if(input.right) x+=1;

  //clear screen before drawing
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  // ctx.drawImage(image, 400, 200, 2000, 1000, 0, 0, 2000, 1000);
  // for(i = 0; i< 100; i++) {
  //   backCtx.fillStyle = "blue"; //named color, hex color, image, gradiant
  //   backCtx.fillRect(
  //     (i * 20) % 100, //random location s on the canvas
  //     (i* 20) % 100,
  //     10, //width of 10
  //     10  //height of 10
  //   )
  // }
  // backCtx.fillStyle = "red";
  // backCtx.fillRect(x, y, 5, 5);

  // for(i = 0; i< 100; i++) {
  //   ctx.fillStyle = "blue"; //named color, hex color, image, gradiant
  //   ctx.fillRect(
  //     //(i * 20) % 100, //random location s on the canvas
  //     //(i* 20) % 100,
  //     i * Math.random(),
  //     i * Math.random(),
  //     10, //width of 10
  //     10  //height of 10
  //   )
  // }
  ctx.fillStyle = "red";
  ctx.fillRect(x, y, 5, 5);

  //swap buffers
  // ctx.drawImage(backCanvas, 0, 0):
  //setTimeout(loop, speed);

  //syncs with your monitor's refresh rate
  requestAnimationFrame(loop);

}

requestAnimationFrame(loop);
//var intervalId = setInterval(loop, speed);
loop();
