function setup() {
  createCanvas(550, 720);
  background(255, 255, 255);
}

let xpush = 70;
let ypush = 690;

let allColors = [
  [255, 105, 180], // Hot Pink
  [50, 205, 50], // Lime Green
  [30, 144, 255], // Dodger Blue
  [255, 165, 0], // Orange
  [255, 255, 255], //SHOULD BE SAME COLOUR AS THE BACKGRND
];
const colorsLenght = allColors.length;
let currentColor = [173, 216, 230];
let currentColorProbability = 0.87;

function pickColor() {
  let randomNumber = random(1);
  if (randomNumber > currentColorProbability) {
    const randomIndex = Math.floor(Math.random() * allColors.length);
    currentColor = allColors[randomIndex];
  }
  return currentColor;
}

function drawLines(x1, y1, x2, y2) {
  stroke(0, 0, 0);
  stroke(currentColor);
  x2 = x1 - xpush;
  y2 = y1 + ypush;
  y1 = random(10, 20);

  line(x1, y1, x2, y2);
}

function draw() {
  for (let col = 0; col < 400; col++) {
    pickColor();
    let startX = 100;
    let startY = 10;
    let randomPushY = random(-3, +3);
    let x = startX + col;
    let y = startY + randomPushY;
    drawLines(x, y, x, y);
  }
  noLoop();
}
