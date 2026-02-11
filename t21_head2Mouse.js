/*******************************************************/
// P5.play: t21_head2Mouse
// Move sprite towards the mouse' position
// Written by ???
/*******************************************************/
	
/*******************************************************/
// setup()
/*******************************************************/
function setup() {

	console.log("setup: ");
	cnv = new Canvas(windowWidth, windowHeight);
	
	testSprite = new Sprite(200, 0, 50, "d");
	testSprite.color = 'purple';
	testSprite.rotationSpeed = 2;

}
	
/*******************************************************/
// draw()
/*******************************************************/
function draw() {
	background('pink');

	testSprite.moveTowards(mouse.x, mouse.y, 50);
}

/*******************************************************/
//  END OF APP
/*******************************************************/