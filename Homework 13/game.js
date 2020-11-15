// setup avatar
var squareX = 50;
var squareY = 50;

// setup controls
var w = 87; 
var s = 83;
var a = 65;
var d = 68;

// setup enemies
var rectX = 430;
var rectY = 520;
var rectXs = []
var rectYs = [];
var widths = [];
var lengths = [];
var rectXSpeeds = [];
var rectYSpeeds = [];

// setup mouse obstacle
var lineX;
var lineY;

// call function to draw random enemy dimensions
function getRandomNumber(number) {
    return Math.floor(Math.random() * number) + 10;
}

function setup() { createCanvas(500, 600);
	// call function to position avatar
	positionSquare(210,130);
	// setup enemy speeds
	for (var i = 0; i < 5; i++) {
		rectXSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
		rectYSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
		rectXs[i] = getRandomNumber(230);
		rectYs[i] = getRandomNumber(320);
		widths[i] = getRandomNumber(100);
		lengths[i] = getRandomNumber(40);
	}
}

// position avatar
function positionSquare(x,y) {
	squareX = x;
	squareY = y;
	console.log(squareX);
}

function draw () {
	// call function to draw background
	drawBackground();
	
	// draw background
	function drawBackground() {
	background("blueviolet");
	stroke(0);
	fill(0);
	}
	
	// call function to draw borders
	drawBorders(4);
	
	// draw borders
	function drawBorders(thickness) {
	// draw top border
		rect(0,0,width,thickness);
	// draw left border
		rect(0,0,thickness,height);
	// setup bottom border
		rect(0, height-thickness,width, thickness);
	// draw right border
		rect(width-5,0,thickness,height-100);
	}
	
	// call function to draw "EXIT" sign
	drawExit();

	// draw "EXIT" sign
	function drawExit() {
		textSize(16);
		text("EXIT", width-50,height-50);
	}

	// call function to draw avatar
	drawSquare();
	
	// call function to draw avatar controls
	drawControls();

	// draw avatar controls
	function drawControls() {
		if(keyIsDown(w)) {
			squareY -= 5;   
		}
		else if(keyIsDown(s)) {
			squareY += 5;   
		}
		else if(keyIsDown(a)) {
			squareX -= 5;   
		}
		else if(keyIsDown(d)) {
			squareX += 5;   
		}
	}

	// draw avatar
	function drawSquare() {
		fill("crimson");
		square(squareX, squareY, 50);
	}
	
	// call function to draw enemies
	drawRect();

	// draw enemies
	function drawRect() {
		fill("papyawhip");
		for (var i = 0; i < rectXs.length; i++) {
			rect(rectXs[i], rectYs[i], widths[i], lengths[i]);
			// call function to draw enemy movement
			drawRectMovement();
			// draw enemy movement
			function drawRectMovement () {
				rectXs[i] += rectXSpeeds[i];
				rectYs[i] += rectYSpeeds[i];
				if(rectXs[i] > width && rectYs[i] > height) {
					rectXs[i] = 0;
					rectYs[i] = 0;
				}
				else if(rectXs[i] < 0 && rectYs[i] < 0) {
					rectXs[i] = width;
					rectYs[i] = height;
				}
			}
		}
	}

	// call function to draw center text
	drawCenterText();
	
	// draw center text
	function drawCenterText() {
		// draw "You Win!" message
		if(squareX > width && squareY > width-50) {
			fill(0);
			stroke(12);
			textSize(26);
			text("You Win!", width/2-50, height/2-50);
		}
		// draw title
		else {
			fill(0);
			stroke(12);
			textSize(26);
			text("The Rectangle of Doom", width/2-145, height/2-50);
		}
	}
	
	// call function to draw mouse obstacle
	drawLine();
	
	// draw mouse obstacle
	function drawLine() {
		line(lineX, lineY, lineX, lineY-80);
	}
}

// generate mouse obstacle 
function mouseClicked()
{
	lineX = mouseX;
	lineY = mouseY;
}