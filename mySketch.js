
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
  background(200);
  console.log(rotationX);
  
  rotateX(45);
  box(200, 200, 200);

}
