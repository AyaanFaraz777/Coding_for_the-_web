let x = 10;
let y = 10;
let vx = 5;
let vy = 3;

function setup() {
  createCanvas(1000, 1000);
}

function draw() {
  background(210);

  if (x >= 600|| x <= 0) {
    vx *= -1;
  }
  
  if(y >= 600 || y <= 0){
    vy*=-1
  }
  x += vx;
  y += vy
  fill(random(0,200))
  ellipse(x,y, 50, 50);
}
