var health = 10
var ammo = 20
var player_position = { x: 5, y: 5}
var enemy_position = {
	x:Math.floor(Math.random()*5)*100+5,
	y:Math.floor(Math.random()*5)*100+5,
	armor:Math.ceil(Math.random()*3)
}





w = 600;
h = 400;
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var scoreDiv = document.getElementById("score")
var attack = document.getElementById("attack");
var score = 0

function background() {
	var img = new Image();
	img.src = 'photos/New Piskel (2).png'
	ctx.drawImage(img, 0, 0, 500, 500)
}


function teleport(){
	enemy_position.x = Math.floor(Math.random()*5)*100+5
	enemy_position.y = Math.floor(Math.random()*5)*100+5
	enemy_position.armor = Math.ceil(Math.random()*3) 
}

var image = document.getElementById('source');




var drawGrid = function(w, h) {
	ctx.canvas.width  = w;
	ctx.canvas.height = h;

	background();

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
	var img = new Image();
	img.src = 'photos/goodTank.png';
	ctx.drawImage(img, x, y, 90, 90)
};

function draw_playerleft(x, y) {
	var img = new Image();
	img.src = 'photos/goodTank left.png';
	ctx.drawImage(img, x, y, 90, 90)
};

function draw_playerup(x, y) {
	var img = new Image();
	img.src = 'photos/New Piskel (4).png';
	ctx.drawImage(img, x, y, 90, 90)
};

function draw_playerdown(x, y) {
	var img = new Image();
	img.src = 'photos/New Piskel (6).png';
	ctx.drawImage(img, x, y, 90, 90)
};

function draw_enemyleft(x, y) {
	var img = new Image();
	img.src = 'photos/badTank.png';
	ctx.drawImage(img, x, y, 90, 90)
};

function draw_enemyright(x, y) {
	var img = new Image();
	img.src = 'photos/badTank clone.png';
	ctx.drawImage(img, x, y, 90, 90)
};

function draw_enemyup(x, y) {
	var img = new Image();
	img.src = 'photos/New Piskel (7).png';
	ctx.drawImage(img, x, y, 90, 90)
};

function draw_enemydown(x, y) {
	var img = new Image();
	img.src = 'photos/New Piskel (8).png';
	ctx.drawImage(img, x, y, 90, 90)
};




draw_player(5,5)


//for (var i = 0; i < numEnemies; i++) Math.floor(Math.random()) {

//};


function move(e){
	//left
	if(e.keyCode == 13) { 
		console.log(attack.value)
		if (attack.value >= enemy_position.armor){
			alert("You killed the enemy tank!")
			attack.value = ""
			teleport()
			score += 100
			scoreDiv.innerHTML = 'Score: ' + score;


			//trummpss wallllllllllllllllllllllllllllllllllllllllllllllllllllllllllllll
		}
	}

	if(e.keyCode == 37) {
		ctx.clearRect(x, y, ctx.canvas.width, ctx.canvas.height);
		drawGrid(500,500);
		player_position.x -= 100

		if (player_position.x == enemy_position.x && player_position.y == enemy_position.y) {
			player_position.x += 100;
			draw_enemyright(enemy_position.x,enemy_position.y)
			document.getElementById("p1").innerHTML = "enter ammo";
			attack.addEventListener
			if (attack.value >= enemy_position.armor){
				score += 100
				scoreDiv.innerHTML = 'Score: ' + score;
				draw_enemyleft(enemy_position.x, enemy_position.y)
				teleport()
			}

		}

		if (player_position.x<0) {
			player_position.x = 5;
		}
		draw_playerleft( player_position.x, player_position.y);
	}

	//right
	if(e.keyCode == 39) {
		ctx.clearRect(x, y, ctx.canvas.width, ctx.canvas.height);
		drawGrid(500, 500);
		player_position.x += 100

		if (player_position.x == enemy_position.x && player_position.y == enemy_position.y) {
			player_position.x -= 100;
			draw_enemyleft(enemy_position.x,enemy_position.y)
			document.getElementById("p1").innerHTML = "enter ammo";
			attack.addEventListener
			if (attack.value >= enemy_position.armor){
				score += 100
				scoreDiv.innerHTML = 'Score: ' + score;
				draw_enemyleft(enemy_position.x, enemy_position.y)
				teleport()
			}
		}

		if (player_position.x>500) {
			player_position.x = 405;
		}
		draw_player( player_position.x, player_position.y);
	}

	if(e.keyCode == 13) {
		//marrrrrrkkkkkkkkkkkkkkkkkkkk
	}
	//down
	if(e.keyCode == 40) { 
		ctx.clearRect(x, y, ctx.canvas.width, ctx.canvas.height);
		drawGrid(500,500);
		player_position.y += 100

		if (player_position.x == enemy_position.x && player_position.y == enemy_position.y) {
			player_position.y -= 100;
			draw_enemyup(enemy_position.x,enemy_position.y)
			document.getElementById("p1").innerHTML = "enter ammo";
			attack.addEventListener
			if (attack.value >= enemy_position.armor){
				score += 100
				scoreDiv.innerHTML = 'Score: ' + score;
				draw_enemyleft(enemy_position.x, enemy_position.y)
				teleport()
			}
		}	
		if (player_position.y>500) {
			player_position.y = 405;

		}
		draw_playerdown( player_position.x, player_position.y);
	}


	//up
	if(e.keyCode == 38) {
		ctx.clearRect(x, y, ctx.canvas.width, ctx.canvas.height);
		drawGrid(500,500);
		player_position.y -= 100
		if (player_position.x == enemy_position.x && player_position.y == enemy_position.y) {
			player_position.y += 100;
			draw_enemydown(enemy_position.x,enemy_position.y)
			document.getElementById("p1").innerHTML = "Enter Ammo";
			attack.addEventListener
			if (attack.value >= enemy_position.armor){
				score += 100
				scoreDiv.innerHTML = 'Score: ' + score;
				draw_enemyleft(enemy_position.x, enemy_position.y)
				teleport()
			}
		}

		if (player_position.y<0) {
			player_position.y = 5;
		}
		draw_playerup( player_position.x, player_position.y);
	}


}



document.onkeydown = move;



