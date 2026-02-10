/*******************************************************/
// P5.play: t05_createWalls
// Create walls around the canvas
// Written by ???
/*******************************************************/
	
/*******************************************************/
// setup()
/*******************************************************/
function setup() {
	console.log("setup: ");
	cnv = new Canvas(windowWidth, windowHeight);
	world.gravity.y = 10;

	addWalls();

	ball_1 = new Sprite(width/2, height/2, 50, "d")
	ball_1.color = "purple"
	ball_1.vel.x = 1;
	ball_1.vel.y = 1;
	ball_1.bounciness = 1;
	ball_1.friction = 0;
	ball_1.drag = 0;

/**************************************************
	platform_1 = new Sprite(75, 350, 1000, 20, "k");
	platform_1.color = "rgb(240, 204, 255)";
	platform_1.rotation = 20;

	platform_2 = new Sprite(800, 450, 500, 20, "k");
	platform_2.color = "rgb(240, 204, 255)";
	platform_2.rotation = -45;
***************************************************/
}

/*******************************************************/
// addWalls()
/*******************************************************/

function addWalls() {

	wallLH  = new Sprite(0, height/2, 40, height, 'k');
	wallLH.bounciness = 1.2;

	wallRH  = new Sprite(width, height/2, 40, height, 'k');
	wallRH.bounciness = 1.2;

	wallTop  = new Sprite(width/2, 0, width, 40, 'k');
	wallTop.bounciness = 0.1;

	wallBot  = new Sprite(width/2, height, width, 40, 'k');
	wallBot.bounciness = 1.2;

}
	
/*******************************************************/
// draw()
/*******************************************************/
function draw() {
	background('pink');
}

/*******************************************************/
//  END OF APP
/*******************************************************/