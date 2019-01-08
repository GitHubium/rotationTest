
var rot = 0;
var absolute = 0;
var alpha = 0;
var beta = 0;
var gamma = 0;

function setup() {
  createCanvas(windowWidth/2, windowHeight/2);
  noStroke();
  angleMode("degrees");
  stroke(0);
  strokeWeight(2);
  rectMode(CENTER);

}

function windowResized() {
  resizeCanvas(windowWidth/2, windowHeight/2);
}

function draw() {
  // Background
  background(200);

  rot = (alpha===null)?"null...":alpha;

  fill(0, 255, 0);
  textSize(80);
  text(rot, 10, 100);




  fill(255);
  push();
    translate(width/2, height/2);
    rotate(rot);
    rect(0, 0, 300, 300);
  pop();

}

function handleOrientation(event) {
  absolute = event.absolute;
  alpha    = event.alpha;
  beta     = event.beta;
  gamma    = event.gamma;

  // Do stuff with the new orientation data
}

window.addEventListener("deviceorientation", handleOrientation, true);
