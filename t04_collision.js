/*******************************************************/
// P5.play: t04_collision
// Sprite falls due to gravity & collides with the floor
// Written by ???
/*******************************************************/
	
/*******************************************************/
// setup()
/*******************************************************/
function setup() {
	console.log("setup: ");
	cnv = new Canvas(windowWidth, windowHeight);
	world.gravity.y = 10;
	
	firstSprite = new Sprite(20, 20, 50, 50, "d");
	firstSprite.color = 'purple';
	firstSprite.vel.x = 2;
	// firstSprite.bounciness = 1;
	// firstSprite.drag = 1;
	firstSprite.friction = 10;

	platform_1 = new Sprite(75, 350, 1000, 20, "k");
	platform_1.color = "rgb(240, 204, 255)";
	platform_1.rotation = 20;

	platform_2 = new Sprite(800, 450, 500, 20, "k");
	platform_2.color = "rgb(240, 204, 255)";
	platform_2.rotation = -45;

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