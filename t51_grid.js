/*******************************************************/
// P5.play: t51_grid.js
// Create a 100 x 100 grid of sprites
// Written by Nina
/*******************************************************/

let spriteSize = 50;
let spriteX = spriteSize/2 + 25;
let spriteY = spriteSize/2 + 25;
let spriteColor = "pink"

/*******************************************************/
// setup()
/*******************************************************/
function setup() {
	console.log("setup: ");
	cnv = new Canvas(windowWidth, windowHeight);

    for (i = 0; i < 10; i++) {
        console.log("begin loop");
            for (n = 0; n < 10; n++) {
                console.log("run loop");
                box = new Sprite(i*(spriteSize+25), spriteY, spriteSize, spriteSize, "k");
                box.color = spriteColor;
                spriteY = spriteY + spriteSize + 25;
            }
        spriteColor = color(random(255), random(255), random(255));
        spriteX = spriteX + spriteSize + 25;
        spriteY = spriteSize/2 + 25;
        console.log("end loop");
        console.log(spriteX);
    }
}
	
/*******************************************************/
// draw()
/*******************************************************/
function draw() {
	background('gray');
}


/*******************************************************/
//  END OF APP
/*******************************************************/