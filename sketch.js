let circleX = 100;
let circleW = 100;

function setup() {
  createCanvas(490, 800);
}

function draw() {
  background(0);
  noStroke();
  fill(255);
  circle(circleX, 150, circleW);

  circleX = circleX + 3;
  circleW = circleW - 5;
}
