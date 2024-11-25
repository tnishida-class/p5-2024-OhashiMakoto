let balls;

function setup(){
  createCanvas(windowWidth, windowHeight);
  balls = [];
}

function draw(){
  background(0);//背景を黒に設定
  for(let i = 0; i < balls.length; i++){
    let b = balls[i];
    fill(b.color);//ボールの色を設定
    noStroke();//ボールの輪郭を消す
    ellipse(b.x, b.y, b.size);
    b.x += b.vx;
    b.y += b.vy;


       // カーソルに向かって重力が働くようにする
    let angle = atan2(mouseY - b.y, mouseX - b.x);
    let acceleration = 0.3; // 加速度の値
    b.vx += cos(angle) * acceleration;
    b.vy += sin(angle) * acceleration;

   // 球がカーソルに当たった時消える
   if(b.age > 30){ // 30フレーム以上経過したら
    let d = dist(mouseX, mouseY, b.x, b.y);
    if(d < b.size / 2){
      balls.splice(i, 1);
    }
  }

  // 年齢を増加させる
  b.age++;
  }
}

function mouseDragged(){
  const dx = mouseX - pmouseX;
  const dy = mouseY - pmouseY;
  if(mag(dx, dy) > 5){
    const size = random(10, 50);
    const rainbow = color(random(255), random(255), random(255)); // ランダムな色を生成
    const b = { x: mouseX, y: mouseY, size: size, vx: dx, vy: dy, age: 0, color: rainbow };
    balls.push(b);
  }
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
  function keyPressed(){
    if(key === ' '){ // スペースキーが押されたら
      balls = []; // 全てのボールを消す
    }
  }
