//This code is a combination of the code from lecture about noise, my previous works and ChatGPT

function setup() {
  createCanvas(600, 600);
  frameRate(8);
  background(10, 20, 30);
  devider = random(60, 200);
}

let gap = 40;
let numRows = 15;
const originalY = 280;
let devider; //how flat/sharp the lines are
let noiseOffsets = [];
let mouseEffectRadius = 20;
let speedOfFallingOfRect = 30;
let rectangles = [];

class Rect {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width + random(1, 10);
    this.height = height + random(1, 10);
  }

  draw() {
    rect(this.x, this.y, this.width, this.height);
  }

  fall() {
    this.y += speedOfFallingOfRect;
  }

  moveToMouse() {
    this.x = mouseX + random(-10, 5);
  }
}

function drawFallingRectangles() {
  let newRect = new Rect(mouseX, 0, 0, 0);
  rectangles.push(newRect);
  //ChatGPT helped a lot with editing this part
  for (let i = rectangles.length - 1; i >= 0; i--) {
    rectangles[i].fall();
    rectangles[i].moveToMouse();
    rectangles[i].draw();

    if (rectangles[i].y > height) {
      rectangles.splice(i, 1);
    }
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

  noStroke();
  pickSecondColor();
  fill(currentSecondColor);
  drawFallingRectangles();
}
