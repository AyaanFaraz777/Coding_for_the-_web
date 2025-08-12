function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(255);
  rect(200,200,100,100);
  if (mouseX > width/2 && mouseX < width/2+100 &&mouseY> height/2&& mouseY < height/2+100){
    fill("green");
  } 
  else{
    fill("white");
  }
}