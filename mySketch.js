
var rot = 0;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  noStroke();
  angleMode("degrees");
  stroke(0);
  strokeWeight(2);

}

function Cube(x, y) {
  this.x = x || 400;

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight, WEBGL);
}

function draw() {
  rot = rotationX || frameCount;
  console.log(rot)

  // Background
  background(200);

  rotateX(rot);
  box(200, 200, 200);

}
