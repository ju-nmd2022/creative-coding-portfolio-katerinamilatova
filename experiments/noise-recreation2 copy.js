//This code is a combination of the code from lecture about noise, my previous works and ChatGPT

function setup() {
  createCanvas(600, 600);
  frameRate(5);
  background(240, 240, 240);
}

let gap = 80;
let numRows = 15;
const originalY = 280;
const devider = random(60, 200); //how flat/sharp the lines are
let noiseOffsets = [];
let mouseEffectRadius = 20;
let speedOfFalling = 5;
let circles = [];

class Circle {
  constructor(x, y, circleSize, numberOfLines) {
    this.x = x;
    this.y = y;
    this.circleSize = circleSize;
    this.numberOfLines = numberOfLines;
  }

  draw() {
    ellipse(this.x, this.y, this.circleSize);
  }
  moveToMouse() {
    this.x = mouseX + random(-20, 20);
    this.y = mouseY + random(-20, 20);
  }
  fall() {
    this.y += speedOfFalling;
  }

  die() {}
}

function drawFallingCircles() {
  let newCircle = new Circle(mouseX, mouseY, 0, 3);
  circles.push(newCircle);

  for (let i = 0; i < newCircle.numberOfLines; i++) {
    const sizeOfCurrentEllipse = newCircle.circleSize + random(0, 100);
    ellipse(newCircle.x, newCircle.y, sizeOfCurrentEllipse);
  }

  //ChatGPT helped a lot with editing this part
  for (let i = circles.length - 1; i >= 0; i--) {
    circles[i].moveToMouse();
    circles[i].fall();
    circles[i].draw();
  }
}

let allColors = [
  [255, 99, 71],
  [255, 140, 0],
  [255, 165, 0],
  [255, 228, 181],
  [255, 218, 185],
  [255, 182, 193],
  [255, 105, 180],
  [255, 20, 147],
  [240, 128, 128],
  [250, 128, 114],
  [173, 255, 47],
  [144, 238, 144],
  [60, 179, 113],
  [102, 205, 170],
  [135, 206, 250],
  [70, 130, 180],
  [123, 104, 238],
  [186, 85, 211],
  [221, 160, 221],
  [238, 130, 238],
];

const colorsLenght = allColors.length;
let currentColor;
let currentSecondColor;
function pickColor() {
  const randomIndex = Math.floor(Math.random() * allColors.length);
  currentColor = allColors[randomIndex];
}

function pickSecondColor() {
  const randomIndex = Math.floor(Math.random() * allColors.length);
  currentSecondColor = allColors[randomIndex];
}

function draw() {
  pickColor();
  stroke(currentColor);
  strokeWeight(3);
  // fill(currentColor);
  noFill();

  let startY = (height - (numRows - 1) * gap) / 2;

  pickSecondColor();
  stroke(currentSecondColor);
  drawFallingCircles();
}
