var headx = 250;
var bodyx = 200;
var army = 250;
var leftlegx = 260;
var leftlegy = 415;
var rightlegy = 415;
var titlesize = 12;
var titlecount = 0;
var titledirection = 5;
var color = get_random_color();
var headmovement;
var bodymovement;
var armmovement;
var leftlegmovement;
var rightlegmovement;
function setup() { createCanvas(500, 600);
headmovement = Math.floor(Math.random() * 10) + 1;
bodymovement = Math.floor(Math.random() * 10) + 1;
armmovement = Math.floor(Math.random() * 10) + 1;
leftlegmovement = Math.floor(Math.random() * 10) + 1;
rightlegmovement = Math.floor(Math.random() * 10) + 1;
}
function draw() { background("cyan");
//signature
textSize(22);
text('Clint Connors', 65, 400);
//portrait
strokeWeight(3);
fill("bisque");
//head
circle(headx, 120, 150);
headx+=headmovement;
if (headx >= 500 || headx <= 0) {
headmovement *= -1;
}
if (headx == 500 || headx == -500) {
fill(color); }
//glasses (left lense)
square(200, 90, 40);
//glasses (right lense)
square(260, 90, 40);
//left arm
rect(230, army, 200, 30);
army+=armmovement;
if (army >= 500 || army <= 0) {
armmovement *= -1;
}
//right arm
rect(70, 250, 200, 30);
//nose
triangle(240, 150, 250, 130, 260, 150);
fill("darkred");
//body
rect(bodyx, 187, 100, 230);
bodyx+=bodymovement;
if (bodyx >= 500 || bodyx <= 0) {
bodymovement *= -1;
}
//left leg
rect(leftlegx, leftlegy, 30, 150);
leftlegx+=leftlegmovement;
leftlegy+=leftlegmovement;
if (leftlegx >= 500 || leftlegx <= 0 || leftlegy >= 600 || leftlegy <= 0) {
leftlegmovement *= -1;
}
//right leg
rect(215, rightlegy, 30, 150);
rightlegy+=rightlegmovement;
if (rightlegy >= 600 || rightlegy <= 0) {
rightlegmovement *= -1;
}
//glasses (bridge)
line(240, 110, 260, 110);
//mouth
line(230, 170, 270, 170);
strokeWeight(7);
//left eye
point(225, 110);
//right eye
point(273, 110);
//title
textSize(titlesize);
titlesize+= titledirection;
titlecount++;
if(titlecount > 5)
{ titledirection *=-1;
titlecount = 0;
}
text('"Me, Exposed"', 55, 160);
}