
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
  // Background
  background(200);

  rot = accelerationX*100;
  fill(0, 255, 0);
  textSize(80);
  //console.log(rotationX, rotationY, rotationZ);
  if (rot === null) {
    text("null...", 10, 100);
  } else  {
    text(rot, 10, 100);
  }




  fill(255);
  push();
    translate(width/2, height/2);
    rotate(-rot);
    rect(0, 0, 300, 300);
  pop();

}
