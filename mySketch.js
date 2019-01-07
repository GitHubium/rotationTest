
function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  noStroke();
  angleMode("degrees");

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  // Background
  background(0);

  rotateX(rotationX);
  box(200, 200, 200);

}
