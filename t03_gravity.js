/*******************************************************/
// P5.play: t03_gravity
// Sprite falls due to gravity
// Written by ???
/*******************************************************/
	
/*******************************************************/
// setup()
/*******************************************************/
function setup() {
	console.log("setup: ");
	cnv = new Canvas(windowWidth, windowHeight);
	world.gravity.y = 5;
	
	firstSprite = new Sprite(200, 0, 50, 50, "d");
	firstSprite.color = 'purple';
	firstSprite.rotationSpeed = 2;

	secondSprite = new Sprite(300, 0, 50, 50, "s");

	thirdSprite = new Sprite(400, 0, 50, 50, "k");

	fourthSprite = new Sprite(500, 0, 50, 50, "n");

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