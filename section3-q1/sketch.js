let size = 50;// 練習問題「心臓の鼓動のように大きくなったり小さくなったりする円」
let count =0;
let cycle = 100;
let increment = 1;
function setup(){
  createCanvas(200, 200);
}
function draw(){
  background(160, 192, 255);
  count = 
  cycle = 100;
}

function draw(){
  background(160, 192, 255);
  count = (count + 1) % cycle;
  // BLANK[1]
  ellipse(width / 2, height / 2, size);
}
