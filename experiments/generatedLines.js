function setup() {
  createCanvas(600, 680);
  background(216, 191, 216);
}

let xpush = 70;
let ypush = 250;

let allColors = [
  [48, 25, 52], // Dark Purple
  [85, 26, 139], // Medium Purple
  [153, 50, 204], // Dark Orchid
  [216, 191, 216], // Thistle
  [255, 215, 0], // Gold
  [255, 255, 255],
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
  strokeWeight(1.3);
  stroke(currentColor);
  // x2 = x1 - xpush;
  // y2 = y1 + ypush;
  // y1 = random(10, 20);

  line(x1, y1, x2, y2);
}

function draw() {
  let randomThickness = random(10, 70);
  for (let row = 0; row < 7; row++) {
    for (let col = 0; col < 400; col++) {
      pickColor();
      frameRate(3);
      let startX = 100;
      let startY = 100;
      let randomPushY = random(-3, +3);
      let x = startX + col;
      let y = startY + row * randomThickness;
      drawLines(x, y, x, y + randomThickness);
      drawLines(x, y, x, y + randomThickness);
      // noLoop();
    }
  }
}

// let randomPushX = random(-10, 10);
// let randomPushY = random(-10, 10);

// let x = startX + col * (cirleSize + gap) + randomPushX;
// let y = startY + row * (cirleSize + gap) + randomPushY;
