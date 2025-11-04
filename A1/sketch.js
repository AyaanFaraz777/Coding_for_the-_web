let grid = [];
let shapes = [];
let targetColors = [];
let rotations = [];
let scales = [];
let rows = 5;
let cols = 5;
let cellSize = 250;

function setup() {
  createCanvas(cols * cellSize, rows * cellSize);
  for (let r = 0; r < rows; r++) {
    grid[r] = [];
    shapes[r] = [];
    targetColors[r] = [];
    rotations[r] = [];
    scales[r] = [];
    for (let c = 0; c < cols; c++) {
      grid[r][c] = random(100, 400);
      targetColors[r][c] = grid[random(100,255)];
      shapes[r][c] = floor(random(4)); 
      rotations[r][c] = random(0,120);
      scales[r][c] = 1;
    }
  }
}

function draw() {
  background("red");
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      grid[r][c] = lerp(grid[r][c], targetColors[r][c], 0.05);
      rotations[r][c] += 0.02;
      rotations[r][c] -= 0.02;
      scales[r][c] = 1 + sin(millis() * 0.005 + r * c) * 0.2;
      
      fill(grid[r][c]);
      let x = c * cellSize + cellSize/2;
      let y = r * cellSize + cellSize/2;
      
      push();
      translate(x, y);
      rotate(rotations[r][c]);
      scale(scales[r][c]);
      
      if (shapes[r][c] == 0) {
        ellipse(0, 0, cellSize*0.8, cellSize*0.8);
      } else if (shapes[r][c] == 1) {
        rectMode(CENTER);
        rect(0, 0, cellSize*0.8, cellSize*0.8);
      } else if (shapes[r][c] == 2) {
        triangle(0, -cellSize*0.4, -cellSize*0.35, cellSize*0.35, cellSize*0.35, cellSize*0.35);
      } else if (shapes[r][c] == 3) {
        quad(0, -cellSize*0.4,cellSize*0.4, 0,0, cellSize*0.4,-cellSize*0.4, 0);
      }
      pop();
    }
  }
}

function mousePressed() {
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      targetColors[r][c] = random(255);
      shapes[r][c] = floor(random(4));
    }
  }
}
function mousePressed() {
  if (Tone.context.state !== 'running') {
    Tone.start();
  }
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      targetColors[r][c] = random(255);
      shapes[r][c] = floor(random(4));
    }
  }
  playChord();
}

function playChord() {

  let chordSize = floor(random(3, 5));
  let chord = [];
  for (let i = 0; i < chordSize; i++) {
    chord.push(notes[floor(random(notes.length))]);
  }
  

  chord.forEach((note, index) => {
    synth.triggerAttackRelease(note, "8n", Tone.now() + index * 0.05);
  });
}

function keyPressed() {
  if (key === ' ') {
    playMelody();
  }
}

function playMelody() {
  let melody = [notes[0], notes[2], notes[4], notes[7], notes[4], notes[2]];
  melody.forEach((note, index) => {
    synth.triggerAttackRelease(note, "4n", Tone.now() + index * 0.3);
  });
}