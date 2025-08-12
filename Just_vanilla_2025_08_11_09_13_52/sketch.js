var r, s, gs;

function setup() {
  createCanvas(innerHeight, innerWidth);
  r = random(0,TWO_PI);
  s = random(3,30)
  gs = random(3,20)
  // noLoop(); // Run only once
}

function draw() {
  background(0)
  for (let x = 0; x < width; x+=gs) {
    for (let y = 0; y < height; y+=gs) {
      let value = noise(x * 0.02, y * 0.02) * 255;
      stroke(value);
      push()
      translate(x,y)
      rotate(r * noise(x/30, y/30, frameCount/30))
      rect(0, 0, s, s/10);
      pop()
    }
  }
}