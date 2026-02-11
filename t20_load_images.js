/*******************************************************/
// P5.play: t20_load_images
// load & display images
// Written by ???
/*******************************************************/

/*******************************************************/
// preload()
/*******************************************************/
function preload() {

  imgFace = loadImage('../assets/images/face.png');
  imgBG   = loadImage('../assets/images/space.png');

}

/*******************************************************/
// setup()
/*******************************************************/
function setup() {

	console.log("setup: ");
	cnv = new Canvas(windowWidth, windowHeight);
	world.gravity.y = 10;
	alienGroup = new Group();

	addWalls();
	addAliens();

	ball_1 = new Sprite(width/2, height/2, 50, "d");
	ball_1.vel.x = 1;
	ball_1.vel.y = 1;
	ball_1.bounciness = 1;
	ball_1.friction = 0;
	ball_1.drag = 0;

	ball_1.image = (imgFace);
	imgFace.resize(50, 50);

	ball_1.collides(alienGroup, func2Call);

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
// addAliens()
/*******************************************************/

function addAliens() {

	for (i = 0; i < 3; i++)  {
		alien = new Sprite(height/4, width/4, 20);
  		alien.vel.x = random(0, 10);
  		alien.vel.y = random(0, 10);
  	 	alien.bounciness = 1;
  		alien.friction = 1;
		alienGroup.add(alien);
	}

}

/*******************************************************/
// func2Call()
/*******************************************************/

function func2Call(_ball_1, _alien) {
	_alien.remove();
}

	
/*******************************************************/
// draw()
/*******************************************************/
function draw() {
	background(imgBG);
}

/*******************************************************/
//  END OF APP
/*******************************************************/