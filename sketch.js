// function setup() {
//   createCanvas(400, 800);
// }

// function draw() {
//   background(0);

//   rect(mouseX, mouseY, 100, 200);
// }

let octahedron;

function preload() {
  octahedron = loadModel("assets/octahedron.obj");
}

function setup() {
  createCanvas(100, 100, WEBGL);
}

function draw() {
  background(200);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  model(octahedron);
}
