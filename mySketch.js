
var rot = 0;

function setup() {
  createCanvas(windowWidth/2, windowHeight/2, WEBGL);
  noStroke();
  angleMode("degrees");
  stroke(0);
  strokeWeight(2);

}

function Cube(x, y) {
  this.x = x || 400;

}

function windowResized() {
  resizeCanvas(windowWidth/2, windowHeight/2, WEBGL);
}

function draw() {
  rot = rotationZ || frameCount;

  // Background
  background(200);

  rotateX(rot);
  box(200, 200, 200);

}
