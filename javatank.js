

var player_position = { x: 5, y: 5}
var enemy_position = { x:Math.floor(Math.random()*5)*100+5, y:Math.floor(Math.random()*5)*100+5}

w = 600;
h = 400;
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");



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

function draw_player(x, y) {
	ctx.fillStyle = 'green';
	ctx.fillRect(x, y, 90, 90);
};

function draw_enemy(x, y) {
	ctx.fillStyle = 'red';
	ctx.fillRect(x, y, 90, 90);
};

var firstKill = prompt("")
if (firstKill == "high b"){
	alert("You Hit The Tank!")
}

draw_player(5,5)
draw_enemy(enemy_position.x,enemy_position.y)

function move(e){
	//left
	if(e.keyCode == 37) { 
		ctx.clearRect(x, y, ctx.canvas.width, ctx.canvas.height);
		drawGrid(500,500);
		player_position.x -= 100
		draw_enemy(enemy_position.x,enemy_position.y)
		
		if (player_position.x<0) {
			player_position.x = 5;
		}
	}
	//right
	if(e.keyCode == 39) {
		ctx.clearRect(x, y, ctx.canvas.width, ctx.canvas.height);
		drawGrid(500,500);
		player_position.x += 100
		draw_enemy(enemy_position.x,enemy_position.y)

		if (player_position.x>500) {
			player_position.x = 405;
		}
	}
	//down
	if(e.keyCode == 40) { 
		ctx.clearRect(x, y, ctx.canvas.width, ctx.canvas.height);
		drawGrid(500,500);
		player_position.y += 100
		draw_enemy(enemy_position.x,enemy_position.y)

		if (player_position.y>500) {
			player_position.y = 405;
		}
	}
	//up
	if(e.keyCode == 38) {
		ctx.clearRect(x, y, ctx.canvas.width, ctx.canvas.height);
		drawGrid(500,500);
		player_position.y -= 100
		draw_enemy(enemy_position.x,enemy_position.y)

		if (player_position.y<0) {
			player_position.y = 5;
		}
	}
	draw_player( player_position.x, player_position.y);

}

document.onkeydown = move;