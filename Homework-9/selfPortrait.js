function setup() { createCanvas(500, 600);
}
function draw() { background("cyan");
strokeWeight(3);
fill("bisque");
circle(250, 120, 150);
square(200, 90, 40);
square(260, 90, 40);
rect(230, 250, 200, 30);
rect(70, 250, 200, 30);
triangle(240, 150, 250, 130, 260, 150);
fill("darkred");
rect(200, 187, 100, 230);
rect(260, 415, 30, 150);
rect(215, 415, 30, 150);
line(240, 110, 260, 110);
line(230, 170, 270, 170);
strokeWeight(7);
point(225, 110);
point(273, 110);
text('"Me, Exposed"', 55, 160);
text('Clint Connors', 65, 400);
}