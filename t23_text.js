/*******************************************************/
// P5.play: t23_text.js
// Add text
// Written by Nina
/*******************************************************/
	
/*******************************************************/
// setup()
/*******************************************************/
var timeRunning = 0;
function setup() {
    console.log("setup: ");
    console.log(timeRunning);
	cnv = new Canvas(windowWidth, windowHeight);
}
	
/*******************************************************/
// draw()
/*******************************************************/
function draw() {
    timeRunning = millis();
    timeRunning = timeRunning/1000;
    timeRunning = Math.floor(timeRunning);
    console.log(timeRunning);
    background('pink');
    textSize(64);
    fill("purple");
    textFont("Courier New");
    text(timeRunning, windowWidth/2, windowHeight/2);
}

/*******************************************************/
//  END OF APP
/*******************************************************/