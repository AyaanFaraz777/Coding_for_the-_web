function setup() {
  createCanvas(1000, 1000);
}

function draw() {
  background(random(0,255));
  circle1(400,400,400);
  fill("red");
  circle2(200,200,200);
  fill("purple")
  circle3(300,350,100);
  fill("black");
  circle4(450,350,100);
  fill("blue");
  rect(250,410,300,100);
  fill("cyan")
  x= map(mouseX,0, 1000,20,50);
  y= map(0,0.01,20,50);
    ellipse(x,y,diameter);
    
}