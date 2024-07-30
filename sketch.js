let imgracetrack;
let imgturt1;
let imgturt2;
let imgturt3;
let Russo;

//Turtle 1
let x1 = 0;
let xv1 = 14;

//Rabbit 2
let x2 = 0;
let xv2 = 1.5;

//Rabbit 3
let x3 = 0;
let xv3 = 1;

function mouseClicked() {
  if (x1 < 725) {
    x1 += xv1;
  }
}

function preload() {
  imggrass = loadImage("Grassy Background.jpg");
  imgracetrack = loadImage("Race Track.PNG");
  imgturt1 = loadImage("Turtle 1.PNG");
  imgrabbit1 = loadImage("Rabbit 1.PNG");
  imgrabbit2 = loadImage("Rabbit 2.PNG");
  Russo = loadFont("RussoOne-Regular.ttf");
}

function setup() {
  createCanvas(800, 500);
}

function draw() {
  background(220);
  textFont(Russo);
  x2 += xv2;
  x3 += xv3;
  image(imggrass, 0, 0, 800, 800);
  image(imgracetrack, 0, 200, 800, 300);
  image(imgturt1, 738 - x1, 235, 70, 50);
  image(imgrabbit1, 738 - x2, 325, 60, 55);
  image(imgrabbit2, 738 - x3, 413, 60, 60);
  textSize(25);
  fill(color(208, 39, 79));
  text("Instructions:", 20, 40);
  textSize(15);
  fill(color(223, 229, 234));
  text("- You are the turtle in the top lane.", 20, 60);
  text("- Click your mouse to move forward.", 20, 80);
  text("- Get to the finish line first to beat the rabbits!", 20, 100);

  if (738 - x1 < 15) {
    textSize(40);
    text("You won!", 310, 160);
    //x1-=xv1
    xv2 = 0;
    xv3 = 0;
  } else if (738 - x2 < 2) {
    textSize(40);
    text("You lost!", 310, 160);
    x2 -= xv2;
    xv1 = 0;
    xv3 = 0;
  }
  if (738 - x3 < 2) {
    textSize(40);
    text("You lost!", 310, 160);
    x3 -= xv3;
    xv2 = 0;
    xv1 = 0;
  }
}
