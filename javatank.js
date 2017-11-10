
alert("_______WELCOME TO ?????_______")
alert("-----------RULES--------------")

w = 600;
h = 400;
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

var firstKill = prompt("")
if (firstKill == "high b"){
	alert("You Hit The Tank!")
}

var drawGrid = function(w, h) {
    ctx.canvas.width  = w;
    ctx.canvas.height = h;


    for (x=0;x<=w;x+=100) {
        for (y=0;y<=h;y+=100) {
            ctx.moveTo(x, 0);
            ctx.lineTo(x, h);
            ctx.stroke();
            ctx.moveTo(0, y);
            ctx.lineTo(w, y);
            ctx.stroke();
        }
    }

};
    drawGrid(500, 500);

ctx.fillStyle = 'green';
ctx.fillRect(10, 10, 100, 100);