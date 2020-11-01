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

// setup enemy speeds
	circleXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
	circleYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
	rectXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
	rectYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
}

function draw () {
	background("blueviolet");
	stroke(0);
	fill(0);

// draw top border
	rect(0,0,width,4);

// draw left border
	rect(0,0,4,height);

// setup bottom border
	rect(0, height-4,width, 4);

// draw right border
	rect(width-5,0,4,height-100);

// draw "EXIT" sign
	textSize(16);
	text("EXIT", width-50,height-50);

// draw avatar
	fill("crimson");
	square(squareX, squareY, 50);

// draw avatar controls
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

// draw enemy 1
	fill("pink");
	circle(circleX, circleY, 100);

// draw enemy 1 movement
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

// draw enemy 2
	fill("papyawhip");
	rect(rectX, rectY, 20, 5);

// draw enemy 2 movement
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
	line(lineX, lineY, lineX, lineY-80);
}

// draw mouse obstacle 
function mouseClicked()
{
	lineX = mouseX;
	lineY = mouseY;
}