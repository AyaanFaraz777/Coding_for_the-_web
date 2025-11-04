function setup() {
  createCanvas(800,800);
  background(0);
  
  let spacing = 50;
  
  for (let i = 0; i < 10; i++) {       
    for (let j = 0; j < 10; j++) {     
      let x = j * spacing + 20;
      let y = i * spacing + 20;
      
      if((i+j)%2) fill(random(0,255))
      else fill(random(0,255))
      rect(x,y,750,750)
      
    }
  }
}