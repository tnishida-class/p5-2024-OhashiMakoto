function setup() {
  createCanvas(128,128);
}

function draw() {
  background(0);
  fill(178, 100, 162);
  triangle(12,120,116,120,116,10);
  triangle(0,1,110,106,108,106,0);
  fill(255);
  textFont("serif");
  text("46", 68, 100);
}
