/*******************************************************/
// P5.play: t22_keyboard
// Move sprite via keyboard
// Written by ???
/*******************************************************/
	
/*******************************************************/
// setup()
/*******************************************************/
function setup() {
	console.log("setup: ");
	cnv = new Canvas(windowWidth, windowHeight);
	world.gravity.y = 5;
	
	testSprite = new Sprite(windowWidth/2, windowHeight/2, 50, 50, "d");
	testSprite.color = 'purple';
	testSprite.rotationSpeed = 2;

	wallBot  = new Sprite(width/2, height, width, 40, 'k');
	wallBot.bounciness = 0;

}
	
/*******************************************************/
// draw()
/*******************************************************/
function draw() {
	background('pink');

	if (kb.pressing('left')) {

		testSprite.velocity.x = -5;

	} else if (kb.pressing ('right')) {
		
		testSprite.velocity.x = 5;
	};

	if (kb.released('left')) {

		testSprite.velocity.x = 0;
	
	} else if (kb.released('right')) {
		testSprite.velocity.x = 0;
	}

	

	//testSprite.moveTowards(mouseX, mouseY);

	if (mouse.presses()) {
		testSprite.moveTo(windowWidth/2, windowHeight/2, 500);
	}
}

/*******************************************************/
//  END OF APP
/*******************************************************/