
var rot = 0;

function setup() {
  createCanvas(windowWidth/2, windowHeight/2);
  noStroke();
  angleMode("degrees");
  stroke(0);
  strokeWeight(2);
  rectMode(CENTER);

}

function Cube(x, y) {
  this.x = x || 400;

}

function windowResized() {
  resizeCanvas(windowWidth/2, windowHeight/2);
}

function draw() {
  rot = accelerationX*100 || frameCount;
  fill(0);
  text(rot, windowWidth/2, windowHeight/2);


  // Background
  background(200);

  fill(255);
  push();
    translate(width/2, height/2);
    rotate(rot);
    rect(0, 0, 300, 300);
  pop();

}
