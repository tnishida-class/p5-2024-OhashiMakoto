function setup() {
  let s = 50;
  let d = 40;
  createCanvas(400, 400);
  background(255);
noStroke();
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      x = i * s; 
      y = j * s; 
      if ((i + j) % 2 === 1) {
 塗りつぶし(122);
rect(x, y, s, s);
      }
      if (((i + j) % 2 === 1) && (j < 3)) {
 塗りつぶし(255, 0, 0);
 楕円(x + s / 2, y + s / 2, d); 
      }
      if (((i + j) % 2 === 1) && (4 < j)) {
 塗りつぶし(0);
 楕円(x + s / 2,y + s / 2,d,d); 
      }
    }
  }
}
