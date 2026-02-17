/*******************************************************/
// P5.play: t50_extension
// Extension tasks
// Written by ??
/*******************************************************/

let worldTiles;
let ground, water, dirt;


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
	new Canvas(200, 200, "pixelated x4");
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
			"ggg..gggggggg",
			"dddttdddddddd",
			"dddwwdddddddd"
		],
		10, height-30,
		16, 16
	);

	player = new Sprite(10, 10, 10);
	player.friction = 0;
	player.bounciness = 0;

}
	
/*******************************************************/
// draw()
/*******************************************************/
function draw() {
	background("lightblue")

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
		player.velocity.y = 15; 
	} 

	if (kb.presses('q')) {
		player.moveTo(10, 10, 1000);
	}
}

/*******************************************************/
//  END OF APP
/*******************************************************/