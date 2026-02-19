/*******************************************************/
// P5.play: t50_extension
// Extension tasks
// Written by ??
/*******************************************************/

let worldTiles;
let ground, water, dirt;
let score = 0;


/*******************************************************/
// preload()
/*******************************************************/
function preload() {

  worldTiles = loadImage('../assets/images/world_tileset.png');

}
	
/*******************************************************/
// setup()
/*******************************************************/
function setup() {
	console.log("setup: ");
	new Canvas(300, 300, "pixelated x4");
	world.gravity.y = 5;

	ground = new Group();
	ground.collider = "static"
	ground.spriteSheet = worldTiles;
	ground.addAni({ w:16, h:16, row:0, col:0});
	ground.tile = "g"

	waterTop = new Group();
	waterTop.collider = "none"
	waterTop.spriteSheet = worldTiles;
	waterTop.addAni({ w:16, h:16, row:9, col:4});
	waterTop.tile = "t"

	water = new Group();
	water.collider = "none"
	water.spriteSheet = worldTiles;
	water.addAni({ w:16, h:16, row:10, col:4});
	water.tile = "w"

	dirt = new Group();
	dirt.collider = "static"
	dirt.spriteSheet = worldTiles;
	dirt.addAni({ w:16, h:16, row:1, col:1});
	dirt.tile = "d"


	new Tiles(
		[	
			"..................................",
			"gg................................",
			"ddgg................gggg..........",
			".............................gg...",
			"......gg..........................",
			"...........................gg.....",
			"..........gg......................",
			".........................gg.......",
			"..................................",
			"ggg..ggggggggggggggggggggggggggggg",
			"dddttddddddddddddddddddddddddddddd",
			"dddwwddddddddddddddddddddddddddddd",
			"dddwwddddddddddddddddddddddddddddd"
		],
		5, 10,
		16, 16
	);

	player = new Sprite(10, 100, 10);
	player.friction = 0;
	player.bounciness = 0;
	player.color = "green";

	coinGroup = new Group;

	coin = new Sprite(10, 10, 10);
	coin.collider = "static";
	coin.color="yellow";

	coinGroup.add(coin);

}

/*******************************************************/
// colectCoin()
/*******************************************************/

function collectCoin(_player, _coin) {
	_coin.remove();
	score++;
	console.log(score);

}
	
/*******************************************************/
// draw()
/*******************************************************/
function draw() {
	background("lightblue");

	if (kb.pressing('left')) {
		player.velocity.x = -2;

	} else if (kb.pressing ('right')) {
		player.velocity.x = 2;
	};

	if (kb.released('left')) {
		player.velocity.x = 0;
	
	} else if (kb.released('right')) {
		player.velocity.x = 0;
	}

	if (kb.presses('up') && player.colliding(ground)) {
		player.velocity.y = 14; 
	} 

	if (kb.presses('q')) {
		player.moveTo(10, 10, 1000);
	}

	player.collides(coinGroup, collectCoin);

	if (player.y > 600) {
		console.log("fallen");
		player.y = 100;
		player.x = 10;
	}

	camera.x = player.x;
	camera.y = player.y;

}

/*******************************************************/
//  END OF APP
/*******************************************************/