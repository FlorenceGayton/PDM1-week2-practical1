let corner1X = 0;
let corner1Y = 0;
let corner2X = 0;
let corner2Y = 0;

function setup() {
    createCanvas(500, 500);
}
function draw() {
    background(0);
    rectMode(CENTER);
    corner1X = mouseX - 100;
    corner1Y = mouseY - 100;
    corner2X = mouseX + 100;
    corner2Y = mouseY + 100;
    square(mouseX, mouseY, 100);
    square(corner1X, corner1Y, 100);
    square(corner2X, corner2Y, 100);
}

