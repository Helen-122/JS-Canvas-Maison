var ctx = canvas.getContext("2d");
ctx.beginPath();
ctx.strokeStyle = "red";
ctx.moveTo(80, 120);
ctx.lineTo(400, 120);
ctx.lineTo(400, 460);
ctx.lineTo(80, 460);
ctx.lineTo(80, 120);
ctx.fillStyle = "#87CEEB";
ctx.fill();
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.strokeStyle = "red";
ctx.moveTo(240, 2);
ctx.lineTo(400, 120);
ctx.lineTo(80, 120);
ctx.lineTo(240, 2);
ctx.fillStyle = "pink";
ctx.fill();
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.fillStyle = "yellow";
 ctx.fillRect(100, 180, 80, 80);
 ctx.strokeStyle = "red";
 ctx.strokeRect(100, 180, 80, 80);
 ctx.closePath();
 ctx.fill();
 ctx.stroke();

ctx.beginPath();
ctx.fillStyle = "yellow";
ctx.fillRect(290, 180, 80, 80);
ctx.strokeStyle = "red";
ctx.strokeRect(290, 180, 80, 80);
ctx.closePath();
ctx.fill();
ctx.stroke();


ctx.beginPath();
ctx.strokeStyle = "red";
ctx.moveTo(180, 360);
ctx.lineTo(290, 360);
ctx.lineTo(290, 460);
ctx.lineTo(180, 460);
ctx.lineTo(180, 360);
ctx.fillStyle = "#9370DB";
ctx.fill();
ctx.stroke();
ctx.closePath();



/*var canvas = document.getElementById('canvas');
var ctx = canvas.getContext("2d");
ctx.beginPath();
ctx.strokeStyle = "red";
ctx.moveTo(40, 60);
ctx.lineTo(200, 60);
ctx.lineTo(200, 300);
ctx.lineTo(40, 300);
ctx.lineTo(40, 60);
ctx.fillStyle = "yellow";
ctx.fill();
ctx.stroke();
ctx.closePath();
*/

//ctx.fillStyle = "red";
//ctx.fillRect (10, 10, 50, 50);
