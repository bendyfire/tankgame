var images = [];
function preload() {
    for (var i = 0; i < arguments.length; i++) {
        images[i] = new Image();
        images[i].src = preload.arguments[i];
    }
}

//-- usage --//
preload(
    "photos/goodTank.png",
    "photos/goodTank left.png",
    "photos/New Piskel (4).png",
    "photos/New Piskel (6).png",
    "photos/badTank.png",
    "photos/badTank clone.png",
    "photos/New Piskel (7).png",
    "photos/New Piskel (8).png",
    "photos/New Piskel (2).png"
)
 

alert ('HOW TO PLAY:  move your tank around the screen to find the hidden tanks.  when you encounter an enemy tank,  it will have an armor level of 1, 2, or 3. you must decide on how much bullets to use on that tank.  1 bullet will kill level 1 tank, 2 kill level 2, and so forth.  If you enter a number that is lower than the enemy tanks level, you will lose 2 heath and the tank will flee.  If you run out of health or run out of ammo than you lose.  each tank kill will give you 100 points and the goal is to get as many points as possible before you die.  If the time runs out before you are able to find a tank and input a number, than you will also die.')


var health = 10
var ammo = 20
var player_position = { x: 5, y: 5}
var enemy_position = {
	x:Math.floor(Math.random()*5)*100+5,
	y:Math.floor(Math.random()*5)*100+5,
	armor:Math.ceil(Math.random()*3)
}
//var ammobox_position = {
//	x:Math.floor(Math.random()*5)*100+5,
//	y:Math.floor(Math.random()*5)*100+5,

//}





w = 600;
h = 400;
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var scoreDiv = document.getElementById("score");
var ammoDiv = document.getElementById("ammo");
var healthDiv = document.getElementById("health");
var timeDiv = document.getElementById("time");
var attack = document.getElementById("attack");
var score = 0
var time = 10

function background() {
	var img = new Image();
	img.src = 'photos/New Piskel (2).png'
	ctx.drawImage(img, 0, 0, 500, 500)
}


function teleport(){
	enemy_position.x = Math.floor(Math.random()*5)*100+5
	enemy_position.y = Math.floor(Math.random()*5)*100+5
	enemy_position.armor = Math.ceil(Math.random()*3) 
	time = 10
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

//function draw_ammobox(x, y){
//	var img = new Image();
//	img.src = 'photos/New Piskel.png';
//	ctx.drawImage(img, x, y, 90, 90)
//}


draw_player(5,5)

//draw_ammobox(ammobox_position.x, ammobox_position.y)
//for (var i = 0; i < numEnemies; i++) Math.floor(Math.random()) {

//};


function move(e){
	//left
	if(e.keyCode == 13) { 
		console.log(attack.value)
		av = attack.value
		console.log(av, enemy_position.armor)
		if (av >= enemy_position.armor){
			alert("You killed the enemy tank!")
			attack.value = ""
			score += 100
			scoreDiv.innerHTML = 'Score: ' + score;
			ammo -= av
			ammoDiv.innerHTML = 'Ammo: ' + ammo;
			attack.style.visibility = "hidden"
			document.getElementById("p1").innerHTML = "";
		}
		console.log(av, enemy_position.armor)
		if (av < enemy_position.armor) {
			alert("The enemy's armor was greater than your firepower! you lose 2 health!")
			ammo -= av
			ammoDiv.innerHTML = 'Ammo: ' + ammo;
			health -= 2
			healthDiv.innerHTML = 'Health: ' + health;
			attack.style.visibility = "hidden"
			document.getElementById("p1").innerHTML = "";
		}
		
		teleport()
		
		if (ammo <= 0) {
			alert ("You ran out of ammo! game over! Your score was: " + score)
			document.location.reload();
		}
		if (health <= 0) {
			alert ("You ran out of health! game over! Your score was: " + score)
			document.location.reload();
		}
			//trummpss wallllllllllllllllllllllllllllllllllllllllllllllllllllllllllllll
	}
	//left
	if(e.keyCode == 37) {
		ctx.clearRect(x, y, ctx.canvas.width, ctx.canvas.height);
		drawGrid(500,500);
		player_position.x -= 100

		if (player_position.x == enemy_position.x && player_position.y == enemy_position.y) {
			player_position.x += 100;
			draw_enemyright(enemy_position.x,enemy_position.y)
			document.getElementById("p1").innerHTML = "enter ammo";
			attack.addEventListener
			attack.style.visibility = "visible"
		}
		//if (player_position.x == ammobox_position.x && player_position.y == ammobox_position.y) {
		//	player_position.x += 100;
		//	draw_ammobox(ammobox_position.x, ammobox_position.y)
		//	alert('you picked up an ammo box! + 5 ammo')
		//	ammo += 5
		//	ammoDiv.innerHTML = 'Ammo: ' + ammo;
		//}

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
			attack.style.visibility = "visible"
		}
		//if (player_position.x == ammobox_position.x && player_position.y == ammobox_position.y) {
		//	player_position.x -= 100;
		//	draw_ammobox(ammobox_position.x, ammobox_position.y)
		//	alert('you picked up an ammo box! + 5 ammo')
		//	ammo += 5
		//	ammoDiv.innerHTML = 'Ammo: ' + ammo;
		//}
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
			attack.style.visibility = "visible"
		}	
		//if (player_position.x == ammobox_position.x && player_position.y == ammobox_position.y) {
		//	player_position.x -= 100;
		//	draw_ammobox(ammobox_position.x, ammobox_position.y)
		//	alert('you picked up an ammo box! + 5 ammo')
		//	ammo += 5
		//	ammoDiv.innerHTML = 'Ammo: ' + ammo;
		//}
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
			attack.style.visibility = "visible"
		}
		//if (player_position.x == ammobox_position.x && player_position.y == ammobox_position.y) {
		//	player_position.x += 100;
		//	draw_ammobox(ammobox_position.x, ammobox_position.y)
		//	alert('you picked up an ammo box! + 5 ammo')
		//	ammo += 5
		//	ammoDiv.innerHTML = 'Ammo: ' + ammo;
		//}
		if (player_position.y<0) {
			player_position.y = 5;
		}
		draw_playerup( player_position.x, player_position.y);
	}

}



document.onkeydown = move;

setInterval(function(){
	time -= 1;
	timeDiv.innerHTML = 'Time: ' + time;
		if (time == 0) {
			alert ("You ran out of time! game over! Your score was: " + score)
			document.location.reload();
		}

}, 1000);



