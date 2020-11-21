// setup avatar
var squareX = 50;
var squareY = 50;

// setup controls
var w = 87; 
var s = 83;
var a = 65;
var d = 68;

// setup enemy 1
var circleX = 220;
var circleY = 260;
var circleXSpeed;
var circleYSpeed;

// setup enemy 2
var rectX = 430;
var rectY = 520;
var rectXSpeed;
var rectYSpeed;

// setup mouse obstacle
var lineX;
var lineY;

function setup() { createCanvas(500, 600);
	// call function to position avatar
	positionSquare(210,130);
	// setup enemy speeds
	circleXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
	circleYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
	rectXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
	rectYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
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
	drawEnemies();

	// draw enemies
	function drawEnemies() {
		// draw enemy 1
		fill("pink");
		circle(circleX, circleY, 100);
		// draw enemy 2
		fill("papyawhip");
		rect(rectX, rectY, 20, 5);
	}
	
	// call function to draw enemy 1 movement
	drawCircleMovement();

	// draw enemy 1 movement
	function drawCircleMovement() {
		circleX += circleXSpeed;
		circleY += circleYSpeed;
		if(circleX > width && circleY > height) {
			circleX = 0;
			circleY = 0;
		}
		else if(circleX < 0 && circleY < 0) {
			circleX = width;
			circleY = height;
		}
	}

	// call function to draw enemy 2 movement
	drawRectMovement();

	// draw enemy 2 movement
	function drawRectMovement () {
		rectX += rectXSpeed;
		rectY += rectYSpeed;
		if(rectX > width && rectY > height) {
			rectX = 0;
			rectY = 0;
		}
		else if(rectX < 0 && rectY < 0) {
			rectX = width;
			rectY = height;
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